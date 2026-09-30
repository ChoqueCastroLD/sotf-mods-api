/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Integrations_TitleInputs */

const en_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrations`)
};

const es_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integraciones`)
};

const de_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrationen`)
};

const fr_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intégrations`)
};

const it_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrazioni`)
};

const nl_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integraties`)
};

const pl_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integracje`)
};

const pt_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrações`)
};

const ru_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Интеграции`)
};

const sv_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integrationer`)
};

const tr_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entegrasyonlar`)
};

const zh_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`集成`)
};

const ja_admin_integrations_title = /** @type {(inputs: Admin_Integrations_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`連携`)
};

/**
* | output |
* | --- |
* | "Integrations" |
*
* @param {Admin_Integrations_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_integrations_title = /** @type {((inputs?: Admin_Integrations_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Integrations_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_integrations_title(inputs)
	if (locale === "de") return de_admin_integrations_title(inputs)
	if (locale === "fr") return fr_admin_integrations_title(inputs)
	if (locale === "it") return it_admin_integrations_title(inputs)
	if (locale === "nl") return nl_admin_integrations_title(inputs)
	if (locale === "pl") return pl_admin_integrations_title(inputs)
	if (locale === "pt") return pt_admin_integrations_title(inputs)
	if (locale === "ru") return ru_admin_integrations_title(inputs)
	if (locale === "sv") return sv_admin_integrations_title(inputs)
	if (locale === "tr") return tr_admin_integrations_title(inputs)
	if (locale === "zh") return zh_admin_integrations_title(inputs)
	if (locale === "ja") return ja_admin_integrations_title(inputs)
	return en_admin_integrations_title(inputs)
});
