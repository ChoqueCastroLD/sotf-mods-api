/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_UnknownInputs */

const en_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown queue`)
};

const es_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cola desconocida`)
};

const de_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unbekannte Warteschlange`)
};

const fr_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File inconnue`)
};

const it_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coda sconosciuta`)
};

const nl_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onbekende wachtrij`)
};

const pl_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieznana kolejka`)
};

const pt_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fila desconhecida`)
};

const ru_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неизвестная очередь`)
};

const sv_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okänd kö`)
};

const tr_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilinmeyen kuyruk`)
};

const zh_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知队列`)
};

const ja_admin_ops_dl_unknown = /** @type {(inputs: Admin_Ops_Dl_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不明なキュー`)
};

/**
* | output |
* | --- |
* | "Unknown queue" |
*
* @param {Admin_Ops_Dl_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_unknown = /** @type {((inputs?: Admin_Ops_Dl_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_unknown(inputs)
	if (locale === "de") return de_admin_ops_dl_unknown(inputs)
	if (locale === "fr") return fr_admin_ops_dl_unknown(inputs)
	if (locale === "it") return it_admin_ops_dl_unknown(inputs)
	if (locale === "nl") return nl_admin_ops_dl_unknown(inputs)
	if (locale === "pl") return pl_admin_ops_dl_unknown(inputs)
	if (locale === "pt") return pt_admin_ops_dl_unknown(inputs)
	if (locale === "ru") return ru_admin_ops_dl_unknown(inputs)
	if (locale === "sv") return sv_admin_ops_dl_unknown(inputs)
	if (locale === "tr") return tr_admin_ops_dl_unknown(inputs)
	if (locale === "zh") return zh_admin_ops_dl_unknown(inputs)
	if (locale === "ja") return ja_admin_ops_dl_unknown(inputs)
	return en_admin_ops_dl_unknown(inputs)
});
