/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Award_Staff_PickInputs */

const en_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staff pick`)
};

const es_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selección del equipo`)
};

const de_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team-Tipp`)
};

const fr_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choix de l’équipe`)
};

const it_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scelta dello staff`)
};

const nl_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keuze van het team`)
};

const pl_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybór zespołu`)
};

const pt_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha da equipe`)
};

const ru_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбор команды`)
};

const sv_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teamets val`)
};

const tr_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekibin seçimi`)
};

const zh_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队精选`)
};

const ja_ui_domain_award_staff_pick = /** @type {(inputs: Ui_Domain_Award_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スタッフのおすすめ`)
};

/**
* | output |
* | --- |
* | "Staff pick" |
*
* @param {Ui_Domain_Award_Staff_PickInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_award_staff_pick = /** @type {((inputs?: Ui_Domain_Award_Staff_PickInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Award_Staff_PickInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_award_staff_pick(inputs)
	if (locale === "de") return de_ui_domain_award_staff_pick(inputs)
	if (locale === "fr") return fr_ui_domain_award_staff_pick(inputs)
	if (locale === "it") return it_ui_domain_award_staff_pick(inputs)
	if (locale === "nl") return nl_ui_domain_award_staff_pick(inputs)
	if (locale === "pl") return pl_ui_domain_award_staff_pick(inputs)
	if (locale === "pt") return pt_ui_domain_award_staff_pick(inputs)
	if (locale === "ru") return ru_ui_domain_award_staff_pick(inputs)
	if (locale === "sv") return sv_ui_domain_award_staff_pick(inputs)
	if (locale === "tr") return tr_ui_domain_award_staff_pick(inputs)
	if (locale === "zh") return zh_ui_domain_award_staff_pick(inputs)
	if (locale === "ja") return ja_ui_domain_award_staff_pick(inputs)
	return en_ui_domain_award_staff_pick(inputs)
});
