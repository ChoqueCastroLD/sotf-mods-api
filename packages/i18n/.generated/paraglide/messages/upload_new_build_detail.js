/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_New_Build_DetailInputs */

const en_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A BuildShare .json file. Thumbnail and stats are read for you.`)
};

const es_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un archivo .json de BuildShare. La miniatura y los datos se leen solos.`)
};

const de_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine BuildShare-.json-Datei. Vorschaubild und Werte werden für dich gelesen.`)
};

const fr_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un fichier .json BuildShare. La miniature et les statistiques sont lues pour vous.`)
};

const it_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un file .json di BuildShare. Miniatura e statistiche vengono lette per te.`)
};

const nl_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een BuildShare-.json-bestand. Miniatuur en statistieken worden voor je gelezen.`)
};

const pl_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik .json z BuildShare. Miniaturę i statystyki odczytamy za ciebie.`)
};

const pt_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um arquivo .json do BuildShare. A miniatura e as estatísticas são lidas para você.`)
};

const ru_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл .json из BuildShare. Миниатюру и характеристики мы считаем сами.`)
};

const sv_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En BuildShare-.json-fil. Miniatyr och statistik läses åt dig.`)
};

const tr_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare .json dosyası. Küçük resim ve istatistikler senin için okunur.`)
};

const zh_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShare .json 文件。缩略图和数据会自动读取。`)
};

const ja_upload_new_build_detail = /** @type {(inputs: Upload_New_Build_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BuildShareの .json ファイル。サムネイルと統計は自動で読み取ります。`)
};

/**
* | output |
* | --- |
* | "A BuildShare .json file. Thumbnail and stats are read for you." |
*
* @param {Upload_New_Build_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_new_build_detail = /** @type {((inputs?: Upload_New_Build_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_New_Build_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_new_build_detail(inputs)
	if (locale === "de") return de_upload_new_build_detail(inputs)
	if (locale === "fr") return fr_upload_new_build_detail(inputs)
	if (locale === "it") return it_upload_new_build_detail(inputs)
	if (locale === "nl") return nl_upload_new_build_detail(inputs)
	if (locale === "pl") return pl_upload_new_build_detail(inputs)
	if (locale === "pt") return pt_upload_new_build_detail(inputs)
	if (locale === "ru") return ru_upload_new_build_detail(inputs)
	if (locale === "sv") return sv_upload_new_build_detail(inputs)
	if (locale === "tr") return tr_upload_new_build_detail(inputs)
	if (locale === "zh") return zh_upload_new_build_detail(inputs)
	if (locale === "ja") return ja_upload_new_build_detail(inputs)
	return en_upload_new_build_detail(inputs)
});
