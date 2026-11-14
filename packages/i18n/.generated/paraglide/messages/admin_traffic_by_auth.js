/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_By_AuthInputs */

const en_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Members or guests`)
};

const es_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Miembros o invitados`)
};

const de_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mitglieder oder Gäste`)
};

const fr_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Membres ou invités`)
};

const it_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Membri o ospiti`)
};

const nl_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leden of gasten`)
};

const pl_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Członkowie czy goście`)
};

const pt_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Membros ou visitantes`)
};

const ru_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Участники или гости`)
};

const sv_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medlemmar eller gäster`)
};

const tr_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üyeler veya misafirler`)
};

const zh_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`会员或访客`)
};

const ja_admin_traffic_by_auth = /** @type {(inputs: Admin_Traffic_By_AuthInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メンバーかゲストか`)
};

/**
* | output |
* | --- |
* | "Members or guests" |
*
* @param {Admin_Traffic_By_AuthInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_by_auth = /** @type {((inputs?: Admin_Traffic_By_AuthInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_By_AuthInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_by_auth(inputs)
	if (locale === "de") return de_admin_traffic_by_auth(inputs)
	if (locale === "fr") return fr_admin_traffic_by_auth(inputs)
	if (locale === "it") return it_admin_traffic_by_auth(inputs)
	if (locale === "nl") return nl_admin_traffic_by_auth(inputs)
	if (locale === "pl") return pl_admin_traffic_by_auth(inputs)
	if (locale === "pt") return pt_admin_traffic_by_auth(inputs)
	if (locale === "ru") return ru_admin_traffic_by_auth(inputs)
	if (locale === "sv") return sv_admin_traffic_by_auth(inputs)
	if (locale === "tr") return tr_admin_traffic_by_auth(inputs)
	if (locale === "zh") return zh_admin_traffic_by_auth(inputs)
	if (locale === "ja") return ja_admin_traffic_by_auth(inputs)
	return en_admin_traffic_by_auth(inputs)
});
