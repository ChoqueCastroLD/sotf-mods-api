/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Upload_Links_KindInputs */

const en_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Type of link ${i?.n}`)
};

const es_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tipo del enlace ${i?.n}`)
};

const de_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Typ von Link ${i?.n}`)
};

const fr_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Type du lien ${i?.n}`)
};

const it_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tipo del link ${i?.n}`)
};

const nl_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Soort link ${i?.n}`)
};

const pl_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rodzaj linku ${i?.n}`)
};

const pt_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tipo do link ${i?.n}`)
};

const ru_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Тип ссылки ${i?.n}`)
};

const sv_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Typ av länk ${i?.n}`)
};

const tr_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.n}. bağlantının türü`)
};

const zh_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`链接 ${i?.n} 的类型`)
};

const ja_upload_links_kind = /** @type {(inputs: Upload_Links_KindInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`リンク ${i?.n} の種類`)
};

/**
* | output |
* | --- |
* | "Type of link {n}" |
*
* @param {Upload_Links_KindInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_links_kind = /** @type {((inputs: Upload_Links_KindInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Links_KindInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_links_kind(inputs)
	if (locale === "de") return de_upload_links_kind(inputs)
	if (locale === "fr") return fr_upload_links_kind(inputs)
	if (locale === "it") return it_upload_links_kind(inputs)
	if (locale === "nl") return nl_upload_links_kind(inputs)
	if (locale === "pl") return pl_upload_links_kind(inputs)
	if (locale === "pt") return pt_upload_links_kind(inputs)
	if (locale === "ru") return ru_upload_links_kind(inputs)
	if (locale === "sv") return sv_upload_links_kind(inputs)
	if (locale === "tr") return tr_upload_links_kind(inputs)
	if (locale === "zh") return zh_upload_links_kind(inputs)
	if (locale === "ja") return ja_upload_links_kind(inputs)
	return en_upload_links_kind(inputs)
});
