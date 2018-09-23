Public Class Form3

    Private Sub Label1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label1.Click
        PictureBox1.Visible = True
    End Sub

    Private Sub PictureBox1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles PictureBox1.Click
        TextBox1.Visible = True
        Button1.Visible = True
        RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Bravo, vous avez trouvé un easter egg !"
        PictureBox2.Visible = True
        Label3.Visible = True
    End Sub

    
    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        If TextBox1.Text = "I'm a troll" Then
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + TextBox1.Text
            Label2.Visible = True
            NumericUpDown1.Visible = True
        End If
    End Sub

    Private Sub NumericUpDown1_ValueChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles NumericUpDown1.ValueChanged
        If NumericUpDown1.Value = 42 Then
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Bravo, vous avez trouvé le deuxième easter egg !"
            PictureBox3.Visible = True
        Else
            PictureBox3.Visible = False
        End If
    End Sub
End Class