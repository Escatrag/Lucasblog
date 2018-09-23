Public Class Form2
    Sub random()
        Dim rnd As New Random
        Dim rnd2 As Integer

        rnd2 = rnd.Next(0, 20)
    End Sub

    Public Sub progressbar()
        Dim i As Integer

        ProgressBar1.Visible = True

        ProgressBar1.Minimum = 0
        ProgressBar1.Maximum = 100

        For i = 0 To 100
            ProgressBar1.Value = i
            Application.DoEvents()
            System.Threading.Thread.Sleep(20)

        Next
    End Sub
    Private Sub Form2_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        ProgressBar1.Visible = False
        RichTextBox1.Text = "Allons découvrir l'île..."
    End Sub

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Me.Hide()
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        'Nombres aléatoire
        'chances de gagner +
        Dim random As New Random(), rndnbr As Integer
        'ressources
        Dim random2 As New Random(), rndnbr2 As Integer
        'nombre de fois que l'on gagne
        Dim random3 As New Random(), rndnbr3 As Integer
        rndnbr = random.Next(0, 4)

        If rndnbr > 0 Then
            rndnbr2 = random2.Next(1, 5)
            rndnbr3 = random3.Next(1, 5)

            '1= bois, 2=viande, 3=fourrure, 4=plantes, 5=fer
            If rndnbr2 = 1 Then
                Form1.bois = Form1.bois + (rndnbr3 * 4)
            End If

            If rndnbr2 = 2 Then
                Form1.viande = Form1.viande + (rndnbr3 * 4)
            End If

            If rndnbr2 = 3 Then
                Form1.fourrure = Form1.fourrure + (rndnbr3 * 4)
            End If

            If rndnbr2 = 4 Then
                Form1.plantes = Form1.plantes + (rndnbr3 * 4)
            End If

            If rndnbr2 = 5 Then
                Form1.plantes = Form1.plantes + (rndnbr3 * 4)
            End If
        End If

            Button2.Enabled = False

            'Nord
            If RadioButton1.Checked = True Then
                RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "En route pour le Nord! Il y a d'ailleurs une fôret dans cette partie de l'ile..."
                progressbar()
                
                End If

            'Sud
            If RadioButton2.Checked = True Then
                RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous decidez de partir a l'aventure vers le Sud de l'île...Qui sait ce que vous y trouverez ?"
                progressbar()
            End If

            'Est
            If RadioButton3.Checked = True Then
                RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vers la droite ou la gauche ? Vous decidez de partir du coté du soleil levant"
            End If

            'Ouest
            If RadioButton4.Checked = True Then
                RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Hummm...L'ouest ne semble pas mal comme option"
            End If



            Button2.Enabled = True

        If ProgressBar1.Value = ProgressBar1.Maximum Then
            
                ProgressBar1.Visible = False

                'Nord
                If RadioButton1.Checked = True Then
                    RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous découvrez des animaux, mais il sont agressifs, et vous obligent a faire demi-tour"
                End If

                'Sud
                If RadioButton2.Checked = True Then
                    RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Devant vous, la mer a perte de vue...le soleil se couche, ce qui lui donne une teinte pourpre..."
                End If

                'Est
                If RadioButton3.Checked = True Then
                    RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "La marche sur la plage est très agréable, mais vous n'avez découvert qu'une petite portion de l'île et rien de suffisamment interressant"
                End If

                'Ouest
                If RadioButton4.Checked = True Then
                    RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Il n'y a rien, excepté des rochers qui vous barrent le chemin. vous êtes malheuresement obligés de faire demi-tour au bout d'un quart d'heure"
                End If
            End If
    End Sub

    Private Sub Label4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs)

    End Sub

    Private Sub RichTextBox1_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles RichTextBox1.TextChanged
        RichTextBox1.SelectionStart = RichTextBox1.Text.Length
        RichTextBox1.SelectionLength = RichTextBox1.Text.Length
        RichTextBox1.ScrollToCaret()
        RichTextBox1.Refresh()
    End Sub
End Class