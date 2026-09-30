/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Kind_Staff_PickInputs */

const en_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staff pick`)
};

const es_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selección del equipo`)
};

const de_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team-Tipp`)
};

const fr_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choix de l’équipe`)
};

const it_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scelta dello staff`)
};

const nl_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keuze van het team`)
};

const pl_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybór zespołu`)
};

const pt_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha da equipe`)
};

const ru_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбор команды`)
};

const sv_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teamets val`)
};

const tr_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekibin seçimi`)
};

const zh_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队精选`)
};

const ja_admin_awards_kind_staff_pick = /** @type {(inputs: Admin_Awards_Kind_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スタッフのおすすめ`)
};

/**
* | output |
* | --- |
* | "Staff pick" |
*
* @param {Admin_Awards_Kind_Staff_PickInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_kind_staff_pick = /** @type {((inputs?: Admin_Awards_Kind_Staff_PickInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Kind_Staff_PickInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_kind_staff_pick(inputs)
	if (locale === "de") return de_admin_awards_kind_staff_pick(inputs)
	if (locale === "fr") return fr_admin_awards_kind_staff_pick(inputs)
	if (locale === "it") return it_admin_awards_kind_staff_pick(inputs)
	if (locale === "nl") return nl_admin_awards_kind_staff_pick(inputs)
	if (locale === "pl") return pl_admin_awards_kind_staff_pick(inputs)
	if (locale === "pt") return pt_admin_awards_kind_staff_pick(inputs)
	if (locale === "ru") return ru_admin_awards_kind_staff_pick(inputs)
	if (locale === "sv") return sv_admin_awards_kind_staff_pick(inputs)
	if (locale === "tr") return tr_admin_awards_kind_staff_pick(inputs)
	if (locale === "zh") return zh_admin_awards_kind_staff_pick(inputs)
	if (locale === "ja") return ja_admin_awards_kind_staff_pick(inputs)
	return en_admin_awards_kind_staff_pick(inputs)
});
