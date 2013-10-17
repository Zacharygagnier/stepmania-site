if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
	if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
	ss.i18n.addDictionary('nl_NL', {
		'VALIDATOR.FIELDREQUIRED': 'Vul het veld "%s" in, dit is een verplicht veld.',
		'HASMANYFILEFIELD.UPLOADING': 'Uploading... %s',
		'TABLEFIELD.DELETECONFIRMMESSAGE': 'Weet u zeker dat u dit record wilt verwijderen?',
		'LOADING': 'laden...',
		'UNIQUEFIELD.SUGGESTED': "Waarde gewijzigd naar '%s' : %s",
		'UNIQUEFIELD.ENTERNEWVALUE': 'U zult een nieuwe waarde voor dit veld moeten invoeren',
		'UNIQUEFIELD.CANNOTLEAVEEMPTY': 'Dit veld mag niet leeg blijven',
		'RESTRICTEDTEXTFIELD.CHARCANTBEUSED': "Het karakter '%s' mag niet gebruikt worden in dit veld",
		'UPDATEURL.CONFIRM': 'Wilt u de URL wijzigen naar:\n\n%s/\n\nKlik Ok om de URL te wijzigen, Klik Cancel om het'
			+ ' te laten zoals het is:\n\n%s',
		'UPDATEURL.CONFIRMURLCHANGED':'Het URL is veranderd naar \n"%s"',
		'FILEIFRAMEFIELD.DELETEFILE': 'Verwijder bestand',
		'FILEIFRAMEFIELD.UNATTACHFILE': 'Deselecteer bestand',
		'FILEIFRAMEFIELD.DELETEIMAGE': 'Verwijder afbeelding',
		'FILEIFRAMEFIELD.CONFIRMDELETE': 'Weet u zeker dat u dit bestand wilt verwijderen?',
		'LeftAndMain.IncompatBrowserWarning': 'Je huidige browser is niet compatible, gebruik één van deze browsers Internet Explorer 7+, Google Chrome 10+ or Mozilla Firefox 3.5+.',
		'GRIDFIELD.ERRORINTRANSACTION': 'Er is een fout opgetreden bij het ophalen van gegevens van de server\n Probeer later opnieuw.',
		'HtmlEditorField.SelectAnchor': 'Kies een anker',
		'UploadField.ConfirmDelete': 'Weet u zeker dat u dit bestand wilt verwijderen uit het websitebestand?',
		'UploadField.PHP_MAXFILESIZE': 'Bestandsgrootte is hoger dan upload_max_filesize (php.ini directive)',
		'UploadField.HTML_MAXFILESIZE': 'Bestandsgrootte is hoger danMAX_FILE_SIZE (HTML form directive)',
		'UploadField.ONLYPARTIALUPLOADED': 'Bestand is maar gedeeltelijk geupload',
		'UploadField.NOFILEUPLOADED': 'Geen bestand is geupload',
		'UploadField.NOTMPFOLDER': 'Mist een tijdelijke map',
		'UploadField.WRITEFAILED': 'Kan bestand niet naar schijf schrijven',
		'UploadField.STOPEDBYEXTENSION': 'Bestandsupload gestopt door extensie',
		'UploadField.TOOLARGE': 'Bestandsgrootte is te groot',
		'UploadField.TOOSMALL': 'Bestandsgrootte is te klein',
		'UploadField.INVALIDEXTENSION': 'Extensie is niet toegestaan',
		'UploadField.MAXNUMBEROFFILESSIMPLE': 'Maximaal aantal overschreven',
		'UploadField.UPLOADEDBYTES': 'Upload overschrijd bestandsgrootte',
		'UploadField.EMPTYRESULT': 'Leeg bestand geupload',
		'UploadField.LOADING': 'Laden ...',
		'UploadField.Editing': 'Bijwerken ...',
		'UploadField.Uploaded': 'Geupload'
	});
}
