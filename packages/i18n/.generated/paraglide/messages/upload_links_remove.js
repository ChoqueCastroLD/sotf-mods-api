/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Upload_Links_RemoveInputs */

const en_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove link ${i?.n}`)
};

const es_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar el enlace ${i?.n}`)
};

const de_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Link ${i?.n} entfernen`)
};

const fr_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer le lien ${i?.n}`)
};

const it_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi il link ${i?.n}`)
};

const nl_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Link ${i?.n} verwijderen`)
};

const pl_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń link ${i?.n}`)
};

const pt_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover o link ${i?.n}`)
};

const ru_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалить ссылку ${i?.n}`)
};

const sv_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort länk ${i?.n}`)
};

const tr_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.n}. bağlantıyı kaldır`)
};

const zh_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移除链接 ${i?.n}`)
};

const ja_upload_links_remove = /** @type {(inputs: Upload_Links_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`リンク ${i?.n} を削除`)
};

/**
* | output |
* | --- |
* | "Remove link {n}" |
*
* @param {Upload_Links_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_links_remove = /** @type {((inputs: Upload_Links_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Links_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_links_remove(inputs)
	if (locale === "de") return de_upload_links_remove(inputs)
	if (locale === "fr") return fr_upload_links_remove(inputs)
	if (locale === "it") return it_upload_links_remove(inputs)
	if (locale === "nl") return nl_upload_links_remove(inputs)
	if (locale === "pl") return pl_upload_links_remove(inputs)
	if (locale === "pt") return pt_upload_links_remove(inputs)
	if (locale === "ru") return ru_upload_links_remove(inputs)
	if (locale === "sv") return sv_upload_links_remove(inputs)
	if (locale === "tr") return tr_upload_links_remove(inputs)
	if (locale === "zh") return zh_upload_links_remove(inputs)
	if (locale === "ja") return ja_upload_links_remove(inputs)
	return en_upload_links_remove(inputs)
});
