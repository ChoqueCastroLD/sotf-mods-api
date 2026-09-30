/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Admin_Eco_Release_LinkInputs */

const en_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Release page of ${i?.name}`)
};

const es_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Página de la versión ${i?.name}`)
};

const de_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versionsseite von ${i?.name}`)
};

const fr_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page de la version ${i?.name}`)
};

const it_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pagina della versione ${i?.name}`)
};

const nl_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Releasepagina van ${i?.name}`)
};

const pl_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Strona wydania ${i?.name}`)
};

const pt_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Página da versão ${i?.name}`)
};

const ru_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Страница версии ${i?.name}`)
};

const sv_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versionssida för ${i?.name}`)
};

const tr_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} sürüm sayfası`)
};

const zh_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的发布页面`)
};

const ja_admin_eco_release_link = /** @type {(inputs: Admin_Eco_Release_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のリリースページ`)
};

/**
* | output |
* | --- |
* | "Release page of {name}" |
*
* @param {Admin_Eco_Release_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_release_link = /** @type {((inputs: Admin_Eco_Release_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Release_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_release_link(inputs)
	if (locale === "de") return de_admin_eco_release_link(inputs)
	if (locale === "fr") return fr_admin_eco_release_link(inputs)
	if (locale === "it") return it_admin_eco_release_link(inputs)
	if (locale === "nl") return nl_admin_eco_release_link(inputs)
	if (locale === "pl") return pl_admin_eco_release_link(inputs)
	if (locale === "pt") return pt_admin_eco_release_link(inputs)
	if (locale === "ru") return ru_admin_eco_release_link(inputs)
	if (locale === "sv") return sv_admin_eco_release_link(inputs)
	if (locale === "tr") return tr_admin_eco_release_link(inputs)
	if (locale === "zh") return zh_admin_eco_release_link(inputs)
	if (locale === "ja") return ja_admin_eco_release_link(inputs)
	return en_admin_eco_release_link(inputs)
});
