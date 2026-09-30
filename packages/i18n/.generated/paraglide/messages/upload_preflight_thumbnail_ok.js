/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Thumbnail_OkInputs */

const en_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cover set.`)
};

const es_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Portada lista.`)
};

const de_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild gesetzt.`)
};

const fr_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couverture ajoutée.`)
};

const it_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copertina impostata.`)
};

const nl_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag ingesteld.`)
};

const pl_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okładka ustawiona.`)
};

const pt_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capa definida.`)
};

const ru_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обложка есть.`)
};

const sv_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag valt.`)
};

const tr_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak ayarlandı.`)
};

const zh_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已设置封面。`)
};

const ja_upload_preflight_thumbnail_ok = /** @type {(inputs: Upload_Preflight_Thumbnail_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーを設定済み。`)
};

/**
* | output |
* | --- |
* | "Cover set." |
*
* @param {Upload_Preflight_Thumbnail_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_thumbnail_ok = /** @type {((inputs?: Upload_Preflight_Thumbnail_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Thumbnail_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_thumbnail_ok(inputs)
	if (locale === "de") return de_upload_preflight_thumbnail_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_thumbnail_ok(inputs)
	if (locale === "it") return it_upload_preflight_thumbnail_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_thumbnail_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_thumbnail_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_thumbnail_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_thumbnail_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_thumbnail_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_thumbnail_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_thumbnail_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_thumbnail_ok(inputs)
	return en_upload_preflight_thumbnail_ok(inputs)
});
