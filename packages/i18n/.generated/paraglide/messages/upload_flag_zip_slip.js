/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Zip_SlipInputs */

const en_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A path escapes the mod folder (“..” or a link).`)
};

const es_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una ruta sale de la carpeta del mod («..» o un enlace).`)
};

const de_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Pfad verlässt den Mod-Ordner („..“ oder ein Link).`)
};

const fr_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un chemin sort du dossier du mod (« .. » ou un lien).`)
};

const it_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un percorso esce dalla cartella della mod (“..” o un collegamento).`)
};

const nl_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een pad verlaat de modmap (‘..’ of een link).`)
};

const pl_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ścieżka wychodzi poza folder moda („..” lub dowiązanie).`)
};

const pt_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um caminho sai da pasta do mod (“..” ou um link).`)
};

const ru_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Путь выходит за пределы папки мода («..» или ссылка).`)
};

const sv_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En sökväg lämnar moddens mapp (”..” eller en länk).`)
};

const tr_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir yol mod klasörünün dışına çıkıyor (“..” ya da bir bağlantı).`)
};

const zh_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有路径跳出了模组文件夹（“..”或链接）。`)
};

const ja_upload_flag_zip_slip = /** @type {(inputs: Upload_Flag_Zip_SlipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODフォルダーの外を指すパスがあります（「..」またはリンク）。`)
};

/**
* | output |
* | --- |
* | "A path escapes the mod folder (“..” or a link)." |
*
* @param {Upload_Flag_Zip_SlipInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_zip_slip = /** @type {((inputs?: Upload_Flag_Zip_SlipInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Zip_SlipInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_zip_slip(inputs)
	if (locale === "de") return de_upload_flag_zip_slip(inputs)
	if (locale === "fr") return fr_upload_flag_zip_slip(inputs)
	if (locale === "it") return it_upload_flag_zip_slip(inputs)
	if (locale === "nl") return nl_upload_flag_zip_slip(inputs)
	if (locale === "pl") return pl_upload_flag_zip_slip(inputs)
	if (locale === "pt") return pt_upload_flag_zip_slip(inputs)
	if (locale === "ru") return ru_upload_flag_zip_slip(inputs)
	if (locale === "sv") return sv_upload_flag_zip_slip(inputs)
	if (locale === "tr") return tr_upload_flag_zip_slip(inputs)
	if (locale === "zh") return zh_upload_flag_zip_slip(inputs)
	if (locale === "ja") return ja_upload_flag_zip_slip(inputs)
	return en_upload_flag_zip_slip(inputs)
});
