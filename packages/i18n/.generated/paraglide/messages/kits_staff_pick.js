/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Staff_PickInputs */

const en_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staff pick`)
};

const es_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selección del equipo`)
};

const de_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team-Empfehlung`)
};

const fr_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choix de l’équipe`)
};

const it_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scelta dello staff`)
};

const nl_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keuze van het team`)
};

const pl_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybór redakcji`)
};

const pt_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha da equipe`)
};

const ru_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбор команды`)
};

const sv_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redaktionens val`)
};

const tr_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekibin seçimi`)
};

const zh_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑精选`)
};

const ja_kits_staff_pick = /** @type {(inputs: Kits_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スタッフのおすすめ`)
};

/**
* | output |
* | --- |
* | "Staff pick" |
*
* @param {Kits_Staff_PickInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_staff_pick = /** @type {((inputs?: Kits_Staff_PickInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Staff_PickInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_staff_pick(inputs)
	if (locale === "de") return de_kits_staff_pick(inputs)
	if (locale === "fr") return fr_kits_staff_pick(inputs)
	if (locale === "it") return it_kits_staff_pick(inputs)
	if (locale === "nl") return nl_kits_staff_pick(inputs)
	if (locale === "pl") return pl_kits_staff_pick(inputs)
	if (locale === "pt") return pt_kits_staff_pick(inputs)
	if (locale === "ru") return ru_kits_staff_pick(inputs)
	if (locale === "sv") return sv_kits_staff_pick(inputs)
	if (locale === "tr") return tr_kits_staff_pick(inputs)
	if (locale === "zh") return zh_kits_staff_pick(inputs)
	if (locale === "ja") return ja_kits_staff_pick(inputs)
	return en_kits_staff_pick(inputs)
});
