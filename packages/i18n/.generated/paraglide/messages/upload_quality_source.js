/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Quality_SourceInputs */

const en_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source code link`)
};

const es_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace al código fuente`)
};

const de_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link zum Quellcode`)
};

const fr_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien vers le code source`)
};

const it_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link al codice sorgente`)
};

const nl_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link naar de broncode`)
};

const pl_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link do kodu źródłowego`)
};

const pt_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link para o código-fonte`)
};

const ru_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка на исходный код`)
};

const sv_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länk till källkoden`)
};

const tr_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak kod bağlantısı`)
};

const zh_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`源代码链接`)
};

const ja_upload_quality_source = /** @type {(inputs: Upload_Quality_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソースコードへのリンク`)
};

/**
* | output |
* | --- |
* | "Source code link" |
*
* @param {Upload_Quality_SourceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_quality_source = /** @type {((inputs?: Upload_Quality_SourceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Quality_SourceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_quality_source(inputs)
	if (locale === "de") return de_upload_quality_source(inputs)
	if (locale === "fr") return fr_upload_quality_source(inputs)
	if (locale === "it") return it_upload_quality_source(inputs)
	if (locale === "nl") return nl_upload_quality_source(inputs)
	if (locale === "pl") return pl_upload_quality_source(inputs)
	if (locale === "pt") return pt_upload_quality_source(inputs)
	if (locale === "ru") return ru_upload_quality_source(inputs)
	if (locale === "sv") return sv_upload_quality_source(inputs)
	if (locale === "tr") return tr_upload_quality_source(inputs)
	if (locale === "zh") return zh_upload_quality_source(inputs)
	if (locale === "ja") return ja_upload_quality_source(inputs)
	return en_upload_quality_source(inputs)
});
