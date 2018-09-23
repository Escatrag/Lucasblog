
Public Class Form1
    'DECLARATIONS

    'Déclarations bois
    Public bois As Integer = 0

    Public Sub res_bois()
        Dim gain_bois As Integer = 4 * outils
        If outils > 1 Then
            Button1.Text = "Couper du bois (+" + gain_bois.ToString + ")"
        End If
    End Sub

    'Déclaration viande
    Public viande As Integer = 0

    Public fourrure As Integer = 0
    Public Sub res_viande_et_fourrure()
        Dim gain_viande As Integer = 4 * outils
        Dim gain_fourrure As Integer = 2 * outils
        If outils > 1 Then
            Button2.Text = "Chasser (viande/poisson + " + gain_viande.ToString + ", fourrure " + gain_fourrure.ToString + ")"
        End If
    End Sub

    'Déclarations plantations
    Public plantes As Integer = 0

    Public Sub res_plantes()
        Dim gain_plantes As Integer = 7 * outils
        If outils > 1 Then
            Button3.Text = "Faire des plantations (+" + gain_plantes.ToString + ")"
        End If
    End Sub

    'Déclarations fer
    Public fer As Integer = 0

    Public Sub res_fer()
        Dim gain_fer As Integer = 3 * outils
        If outils > 1 Then
            Button12.Text = "miner (+" + gain_fer.ToString + " fer)"
        End If
    End Sub

    'Déclarations cabane
    Public cabane As Integer = 0

    Public limite_ress As Integer = 100

    'Déclarations animaux
    Public enclos As Integer = 0

    'Déclarations outils 
    Public outils As Integer = 0
    Public Sub res_outils()
        Dim dépense_outils As Integer = 8 * outils
        If outils > 1 Then
            Button11.Text = "Améliorer mes outils (-" + dépense_outils.ToString + " de bois)"
        End If
    End Sub

    'fonction progressbar
    Public Sub progressbar()
        Dim i As Integer
        'Progress bar
        ProgressBar1.Minimum = 0
        ProgressBar1.Maximum = 100
        For i = 0 To 100
            ProgressBar1.Value = i
            Application.DoEvents()
            System.Threading.Thread.Sleep(1)
        Next
    End Sub

    Public Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

        If MessageBox.Show("Voulez vous jouer ?", "Jouer ?", MessageBoxButtons.YesNo, MessageBoxIcon.Question) = Windows.Forms.DialogResult.No Then
            End
        End If

        RichTextBox1.Text = "Bienvenue dans ce jeu. Vous incarnez Nathan, un survivant du naufrage de son voilier. Vous allez devoir vous débrouiller sur cette île qui semble déserte...."

        If bois > 500 And fer > 300 And plantes > 250 And outils > 9 Then
            Button13.Visible = True
        End If

        Label1.Text = ""
        Label2.Text = ""
        Label3.Text = ""
        Label4.Text = ""
        Label5.Text = ""
        Label6.Text = ""
        Label7.Text = ""

    End Sub

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click

        'BOIS
        Dim gain_bois As Integer = 4 * outils

        'progressbar
        Button1.Enabled = False
        progressbar()
        Button1.Enabled = True
        ProgressBar1.Value = False

        res_bois()

        'code bois
        If outils > 1 Then
            bois = (4 * outils) + bois
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous abattez des arbres et gagnez + " + gain_bois.ToString + " de bois"
        Else
            bois = bois + 4
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous abattez des arbres et gagnez + 4 de bois"
        End If

        'affichage bois
        If bois > limite_ress Then
            bois = limite_ress
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Ameliorez votre cabane afin de stocker plus de bois"
            Button1.Enabled = False
        End If

        'affichage texte bois 
        Label1.Text = "Bois " + bois.ToString + "/" + limite_ress.ToString

        'derniere form
        If bois > 500 And fer > 300 And outils > 9 Then
            Button13.Visible = True
        End If

        'bouton outils
        If bois > 3 Then
            Button11.Visible = True
        End If
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click

        'VIANDE ET FOURRURE

        'Déclarations
        Dim msg_viande As String = "Vous partez en exploration dans le but de chasser et vous nourrir. Vous trouvez des poissons et quelques animaux et gagnez +4 de viande,ansi que +2 fourrure."
        Dim gain_viande As Integer = 4 * outils
        Dim gain_fourrure As Integer = 2 * outils

        'progressbar
        Button2.Enabled = False
        progressbar()
        Button2.Enabled = True
        ProgressBar1.Value = False

        res_viande_et_fourrure()

        'code viande et fourrure
        If outils > 1 Then
            viande = (4 * outils) + viande
            fourrure = (2 * outils) + fourrure
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous partez en exploration dans le but de chasser et vous nourrir. Vous trouvez des poissons et quelques animaux et gagnez " + gain_viande.ToString + " de viande, ainsi que " + gain_fourrure.ToString + " fourrure."
        Else
            viande = viande + 4
            fourrure = fourrure + 2
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + msg_viande
        End If

        'affichage viande + fourrure
        If fourrure > limite_ress Then
            fourrure = limite_ress
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Ameliorez votre cabane afin de stocker plus de bois"
            If viande < limite_ress Then
                Button2.Enabled = True
            Else
                Button2.Enabled = False
            End If
        End If

        If viande > limite_ress Then
            viande = limite_ress
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Ameliorez votre cabane afin de stocker plus de bois"
            Button2.Enabled = False
            If fourrure > limite_ress Then
                Button2.Enabled = False
            End If
        End If

        'afichage viande
        Label2.Text = "Viande/Poisson " + viande.ToString + "/" + limite_ress.ToString

        'affichage fourrure
        Label4.Text = "Fourrure " + fourrure.ToString + "/" + limite_ress.ToString

        'derniere form
        If bois > 500 And fer > 300 And plantes > 250 And outils > 9 Then
            Button13.Visible = True
        End If
    End Sub

    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click
        'PLANTES

        'Déclarations
        Dim msg_plantes As String = "Vous plantez des plantes afin d'avoir d'autres revenus caloriques que la viande."
        Dim gain_plantes As Integer = 7 * outils

        RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + msg_plantes

        'Code progressbar
        Button3.Enabled = False
        progressbar()
        Button3.Enabled = True


        If ProgressBar1.Value = ProgressBar1.Maximum Then
            'code plantes
            If outils > 1 Then
                plantes = (7 * outils) + plantes
                RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vos plantes ont poussés! Vous gagnez " + gain_plantes.ToString + " plantes"
            Else
                plantes = plantes + 7
                RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vos plantes ont poussés! Vous gagnez + 7 !"
            End If
        End If

        ProgressBar1.Value = False

        If plantes > limite_ress Then
            plantes = limite_ress
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Ameliorez votre cabane afin de stocker plus de bois"
            Button1.Enabled = False
        End If

        'affichage plantes
        Label3.Text = "Plantes " + plantes.ToString + "/" + limite_ress.ToString

        'dernière form
        If bois > 500 And fer > 300 And plantes > 250 Then
            Button13.Visible = True
        End If
    End Sub

    Private Sub Button7_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button7.Click
        'CABANE

        'code bois
        If bois < 10 Or fourrure < 5 Then
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous n'avez pas assez de bois ou de fourrure, continuez à collecter des ressources"
        Else

            'code bois
            bois = bois - 10
            cabane = cabane + 1
            Label1.Text = "Bois " + bois.ToString + "/" + limite_ress.ToString

            'fourrure
            fourrure = fourrure - 5
            Label4.Text = "Fourrure " + fourrure.ToString + "/" + limite_ress.ToString

            'niveau cabane
            Label5.Text = "Ma cabane est niveau : " + cabane.ToString
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous construisez une cabane, qui vous permet de vous abriter, certes, mais vous prend 10 de bois ainsi que 5 de fourrure"
        End If

        If cabane > 0 Then
            Button7.Text = "Ameliorer ma cabane"
        End If
    End Sub

    Private Sub Button11_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button11.Click
        'OUTILS

        'Declarations
        Dim gain_bois As Integer = 4 * outils
        Dim dépense_outils As Integer = 8 * outils

        'code bois
        If bois < dépense_outils Then
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous n'avez pas assez de bois"
        Else
            If outils > 1 Then
                bois = bois - dépense_outils
            Else
                bois = bois - 4
            End If

            'code progressbar
            Button11.Enabled = False
            progressbar()
            Button11.Enabled = True
            ProgressBar1.Value = False

            'ameliorer ses outils
            If outils > 1 Then
                RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous améliorez vos outils (-" + dépense_outils.ToString + " de bois)"
            Else
                RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous fabriquez des outils (-4 de bois)"
            End If

            outils = outils + 1
            Label7.Text = " Mes outils sont niveau : " + outils.ToString + "/10"
        End If

        'affichage bois 
        Label1.Text = "Bois " + bois.ToString + "/" + limite_ress.ToString

        If outils > 0 Then
            Button2.Visible = True
        End If

        'code affiche en fonction des ressources
        If outils > 1 Then
            res_bois()
            res_viande_et_fourrure()
            res_plantes()
            res_fer()
            res_outils()
            'chasser
            Button3.Visible = True
        Else
            Button1.Text = "Couper du bois (+4)"
            Button2.Text = "Chasser (viande/poisson +4, fourrure +2)"
            Button3.Text = "Faire des plantations (+7)"
            Button11.Text = "Améliorer mes outils (-4 de bois )"
            Button12.Text = "miner (+3 fer)"
        End If

        'cabane
        If outils > 2 Then
            Button7.Visible = True
        End If

        'plantations
        If outils > 3 Then
            Button12.Visible = True
        End If

        'miner
        If outils > 5 Then
            Button7.Visible = True
        End If

        'outils max
        If outils = 10 Then
            Button11.Enabled = False
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vos outils sont au maximum"
        End If
    End Sub

    Private Sub Button12_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button12.Click
        'MINER

        'DEclarations
        Dim gain_fer As Integer = 3 * outils

        'code progressbar
        Button12.Enabled = False
        progressbar()
        Button12.Enabled = True

        If ProgressBar1.Value = ProgressBar1.Maximum Then
            ProgressBar1.Value = False
        End If

        'gain fer
        If outils > 1 Then
            fer = (3 * outils) + fer
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous minez et trouvez " + gain_fer.ToString + "minerais de fer"
        Else
            fer = fer + 3
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous minez et trouvez 3 minerais de fer"
        End If

        'affichage fer
        Label6.Text = "Fer " + fer.ToString + "/" + limite_ress.ToString

        If fer > 1 Then
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous trouvez un trou dans le sol, et décidez d'utiliser vos outils et de creuser dedans"
        End If

        If bois > 500 And fer > 300 And plantes > 250 And outils > 9 Then
            Button13.Visible = True
        End If
    End Sub

    Private Sub Button13_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button13.Click
        'BOUTON FIN DU JEU 

        If bois > 500 And fer > 300 And plantes > 250 And outils > 9 Then
            'bois
            bois = bois - 500
            Label1.Text = "Bois " + bois.ToString + "/" + limite_ress.ToString
            'fer
            fer = fer - 300
            Label6.Text = "Fer " + fer.ToString + "/" + limite_ress.ToString
            'plantes
            plantes = plantes - 250
            Label3.Text = "Plantes " + plantes.ToString + "/" + limite_ress.ToString
            Form4.Show()
        Else
            RichTextBox1.Text = RichTextBox1.Text + Chr(10) + Chr(13) + "Vous n'avez plus assez de ressouces, continuez a gagner des ressouces "
        End If
    End Sub

    Private Sub Button4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button4.Click
        'EXPLORER
        Form2.Show()
    End Sub
    Private Sub Button8_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button8.Click
        'CHANGELOG
        Form3.Show()
    End Sub

    Private Sub Button5_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button5.Click
        'QUITTER
        Me.Hide()
        If MessageBox.Show("Êtes vous sûr de vouloir quitter ? je n'ai pas encore trouvé le moyen d'enregistrer, donc toute votre progression sera perdue", "quiter ?", MessageBoxButtons.OKCancel) = Windows.Forms.DialogResult.Cancel Then
            Me.Show()
        Else
            End
        End If
    End Sub

    Private Sub Button6_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button6.Click
        'CREDITS
        MessageBox.Show("Tout a été crée par Luca Benard avec l'aide de son père, Samuel Benard.", "Crédits", MessageBoxButtons.OK)
    End Sub

    Private Sub RichTextBox1_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles RichTextBox1.TextChanged
        'SCROLLING
        RichTextBox1.SelectionStart = RichTextBox1.Text.Length
        RichTextBox1.SelectionLength = RichTextBox1.Text.Length
        RichTextBox1.ScrollToCaret()
        RichTextBox1.Refresh()
    End Sub
End Class
