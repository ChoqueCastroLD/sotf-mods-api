/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Version_MissingInputs */

const en_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type the version number in the Release step.`)
};

const es_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe el número de versión en el paso Publicación.`)
};

const de_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib die Versionsnummer im Schritt Veröffentlichung ein.`)
};

const fr_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez le numéro de version à l’étape Publication.`)
};

const it_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi il numero di versione nel passaggio Pubblicazione.`)
};

const nl_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vul het versienummer in bij de stap Publiceren.`)
};

const pl_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz numer wersji w kroku Publikacja.`)
};

const pt_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite o número da versão na etapa Publicação.`)
};

const ru_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Укажите номер версии на шаге «Публикация».`)
};

const sv_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv versionsnumret i steget Publicering.`)
};

const tr_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm numarasını Yayın adımında yaz.`)
};

const zh_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请在“发布”步骤中填写版本号。`)
};

const ja_upload_preflight_version_missing = /** @type {(inputs: Upload_Preflight_Version_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`「公開」ステップでバージョン番号を入力してください。`)
};

/**
* | output |
* | --- |
* | "Type the version number in the Release step." |
*
* @param {Upload_Preflight_Version_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_version_missing = /** @type {((inputs?: Upload_Preflight_Version_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Version_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_version_missing(inputs)
	if (locale === "de") return de_upload_preflight_version_missing(inputs)
	if (locale === "fr") return fr_upload_preflight_version_missing(inputs)
	if (locale === "it") return it_upload_preflight_version_missing(inputs)
	if (locale === "nl") return nl_upload_preflight_version_missing(inputs)
	if (locale === "pl") return pl_upload_preflight_version_missing(inputs)
	if (locale === "pt") return pt_upload_preflight_version_missing(inputs)
	if (locale === "ru") return ru_upload_preflight_version_missing(inputs)
	if (locale === "sv") return sv_upload_preflight_version_missing(inputs)
	if (locale === "tr") return tr_upload_preflight_version_missing(inputs)
	if (locale === "zh") return zh_upload_preflight_version_missing(inputs)
	if (locale === "ja") return ja_upload_preflight_version_missing(inputs)
	return en_upload_preflight_version_missing(inputs)
});
