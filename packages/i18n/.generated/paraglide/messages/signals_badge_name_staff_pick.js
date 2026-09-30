/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Staff_PickInputs */

const en_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staff Pick`)
};

const es_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elegido por el equipo`)
};

const de_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team-Empfehlung`)
};

const fr_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choix de l’équipe`)
};

const it_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scelta dello staff`)
};

const nl_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keuze van het team`)
};

const pl_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybór zespołu`)
};

const pt_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha da equipe`)
};

const ru_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбор команды`)
};

const sv_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teamets val`)
};

const tr_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekibin Seçimi`)
};

const zh_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队精选`)
};

const ja_signals_badge_name_staff_pick = /** @type {(inputs: Signals_Badge_Name_Staff_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スタッフのおすすめ`)
};

/**
* | output |
* | --- |
* | "Staff Pick" |
*
* @param {Signals_Badge_Name_Staff_PickInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_staff_pick = /** @type {((inputs?: Signals_Badge_Name_Staff_PickInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Staff_PickInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_staff_pick(inputs)
	if (locale === "de") return de_signals_badge_name_staff_pick(inputs)
	if (locale === "fr") return fr_signals_badge_name_staff_pick(inputs)
	if (locale === "it") return it_signals_badge_name_staff_pick(inputs)
	if (locale === "nl") return nl_signals_badge_name_staff_pick(inputs)
	if (locale === "pl") return pl_signals_badge_name_staff_pick(inputs)
	if (locale === "pt") return pt_signals_badge_name_staff_pick(inputs)
	if (locale === "ru") return ru_signals_badge_name_staff_pick(inputs)
	if (locale === "sv") return sv_signals_badge_name_staff_pick(inputs)
	if (locale === "tr") return tr_signals_badge_name_staff_pick(inputs)
	if (locale === "zh") return zh_signals_badge_name_staff_pick(inputs)
	if (locale === "ja") return ja_signals_badge_name_staff_pick(inputs)
	return en_signals_badge_name_staff_pick(inputs)
});
