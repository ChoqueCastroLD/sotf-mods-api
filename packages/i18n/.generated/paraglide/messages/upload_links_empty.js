/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Links_EmptyInputs */

const en_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No links yet.`)
};

const es_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay enlaces.`)
};

const de_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Links.`)
};

const fr_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de liens.`)
};

const it_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun link.`)
};

const nl_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen links.`)
};

const pl_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak linków.`)
};

const pt_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum link ainda.`)
};

const ru_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылок пока нет.`)
};

const sv_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga länkar än.`)
};

const tr_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz bağlantı yok.`)
};

const zh_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有链接。`)
};

const ja_upload_links_empty = /** @type {(inputs: Upload_Links_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクはまだありません。`)
};

/**
* | output |
* | --- |
* | "No links yet." |
*
* @param {Upload_Links_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_links_empty = /** @type {((inputs?: Upload_Links_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Links_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_links_empty(inputs)
	if (locale === "de") return de_upload_links_empty(inputs)
	if (locale === "fr") return fr_upload_links_empty(inputs)
	if (locale === "it") return it_upload_links_empty(inputs)
	if (locale === "nl") return nl_upload_links_empty(inputs)
	if (locale === "pl") return pl_upload_links_empty(inputs)
	if (locale === "pt") return pt_upload_links_empty(inputs)
	if (locale === "ru") return ru_upload_links_empty(inputs)
	if (locale === "sv") return sv_upload_links_empty(inputs)
	if (locale === "tr") return tr_upload_links_empty(inputs)
	if (locale === "zh") return zh_upload_links_empty(inputs)
	if (locale === "ja") return ja_upload_links_empty(inputs)
	return en_upload_links_empty(inputs)
});
