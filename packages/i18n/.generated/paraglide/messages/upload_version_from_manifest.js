/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Version_From_ManifestInputs */

const en_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read from manifest.json. To change it, edit the manifest and upload the file again.`)
};

const es_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leída de manifest.json. Para cambiarla, edita el manifest y vuelve a subir el archivo.`)
};

const de_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aus manifest.json gelesen. Um sie zu ändern, bearbeite das Manifest und lade die Datei erneut hoch.`)
};

const fr_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lue dans manifest.json. Pour la changer, modifiez le manifest et renvoyez le fichier.`)
};

const it_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letta da manifest.json. Per cambiarla, modifica il manifest e ricarica il file.`)
};

const nl_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelezen uit manifest.json. Wil je hem wijzigen, pas dan het manifest aan en upload het bestand opnieuw.`)
};

const pl_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odczytana z manifest.json. Aby ją zmienić, edytuj manifest i wyślij plik ponownie.`)
};

const pt_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lida do manifest.json. Para mudá-la, edite o manifest e envie o arquivo de novo.`)
};

const ru_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Считана из manifest.json. Чтобы изменить её, отредактируйте манифест и загрузите файл заново.`)
};

const sv_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läst från manifest.json. Vill du ändra den, redigera manifestet och ladda upp filen igen.`)
};

const tr_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json’dan okundu. Değiştirmek için manifest’i düzenleyip dosyayı yeniden yükle.`)
};

const zh_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`读取自 manifest.json。如需修改，请编辑清单后重新上传文件。`)
};

const ja_upload_version_from_manifest = /** @type {(inputs: Upload_Version_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json から読み取りました。変更するにはマニフェストを編集してファイルを再アップロードしてください。`)
};

/**
* | output |
* | --- |
* | "Read from manifest.json. To change it, edit the manifest and upload the file again." |
*
* @param {Upload_Version_From_ManifestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_version_from_manifest = /** @type {((inputs?: Upload_Version_From_ManifestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Version_From_ManifestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_version_from_manifest(inputs)
	if (locale === "de") return de_upload_version_from_manifest(inputs)
	if (locale === "fr") return fr_upload_version_from_manifest(inputs)
	if (locale === "it") return it_upload_version_from_manifest(inputs)
	if (locale === "nl") return nl_upload_version_from_manifest(inputs)
	if (locale === "pl") return pl_upload_version_from_manifest(inputs)
	if (locale === "pt") return pt_upload_version_from_manifest(inputs)
	if (locale === "ru") return ru_upload_version_from_manifest(inputs)
	if (locale === "sv") return sv_upload_version_from_manifest(inputs)
	if (locale === "tr") return tr_upload_version_from_manifest(inputs)
	if (locale === "zh") return zh_upload_version_from_manifest(inputs)
	if (locale === "ja") return ja_upload_version_from_manifest(inputs)
	return en_upload_version_from_manifest(inputs)
});
