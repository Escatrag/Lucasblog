Public Class Form4
    Dim viande As Integer = Form1.viande
    Dim plantes As Integer = Form1.plantes
    Dim vie As Integer = 100

    Public Sub nmbre_vie()
        vie = vie - 5
        Label4.Text = "Vie : " + vie.ToString
        If vie = 0 Then
            Me.Hide()
            If MessageBox.Show("Vous avez perdu connaissance et n'êtes plus apte a finir le voyage.Le courant vous repousse sur la plage. Il vous manquais : " + Label1.Text + " , ainsi que " + Label2.Text + " Continuer ?", "Continuer ?", MessageBoxButtons.OKCancel) = Windows.Forms.DialogResult.OK Then
                Form1.Show()
            Else
                End
            End If
        End If
    End Sub

    Private Sub Form4_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        Label1.Text = "Viande : " + viande.ToString
        Label2.Text = "Plantes : " + plantes.ToString
        Label4.Text = "Vie : " + vie.ToString
    End Sub

    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click
        If RadioButton1.Checked = False And RadioButton2.Checked = False Then
            MessageBox.Show("/!\ Veuillez choisir un mode de survie.", "Mode de survie", MessageBoxButtons.OK)
        Else
            Button3.Enabled = False
            For i = 0 To 100
                ProgressBar1.Value = i
                Application.DoEvents()
                System.Threading.Thread.Sleep(250)

                'bouffe
                If RadioButton1.Checked = True Then
                    viande = viande - 4
                    Label1.Text = "Viande : " + viande.ToString
                    plantes = plantes - 3
                    Label2.Text = "Plantes : " + plantes.ToString
                    'viande
                    If viande < 4 Then
                        RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous n'avez pas assez de viande, vous commencez à mourrir a petit feu..."
                        nmbre_vie()
                    End If

                    'plantes
                    If plantes < 3 Then
                        RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous n'avez pas assez de plantes, vous commencez à mourrir a petit feu..."
                        nmbre_vie()
                    End If
                End If

                'vie
                If RadioButton2.Checked = True Then
                    nmbre_vie()
                End If
            Next
            If ProgressBar1.Value = ProgressBar1.Maximum And vie > 1 And plantes > 1 And viande > 1 Then
                Me.Hide()
                MessageBox.Show("Vous avez réussi ! Nathan finit par gagner la terre ferme, dans un port d'une île civlisée...Il fût pris en charge par les autorités compétentes,car il s'était évanoui de bonheur et rencontra la femme de sa vie dans l'ambulance (elle lui faisait du bouche a bouche ;) )", "Epic win !", MessageBoxButtons.OK)
            End If
        End If
    End Sub

    Private Sub RichTextBox1_TextChanged(sender As System.Object, e As System.EventArgs) Handles RichTextBox1.TextChanged
        RichTextBox1.SelectionStart = RichTextBox1.Text.Length
        RichTextBox1.SelectionLength = RichTextBox1.Text.Length
        RichTextBox1.ScrollToCaret()
        RichTextBox1.Refresh()
    End Sub
End Class