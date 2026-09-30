/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Staff_Pick_NameInputs */

const en_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staff Pick`)
};

const es_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elegido por el equipo`)
};

const de_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team-Empfehlung`)
};

const fr_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choix de l’équipe`)
};

const it_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scelta dello staff`)
};

const nl_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keuze van het team`)
};

const pl_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybór zespołu`)
};

const pt_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha da equipe`)
};

const ru_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбор команды`)
};

const sv_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teamets val`)
};

const tr_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekibin Seçimi`)
};

const zh_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`团队精选`)
};

const ja_profile_badge_staff_pick_name = /** @type {(inputs: Profile_Badge_Staff_Pick_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スタッフのおすすめ`)
};

/**
* | output |
* | --- |
* | "Staff Pick" |
*
* @param {Profile_Badge_Staff_Pick_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_staff_pick_name = /** @type {((inputs?: Profile_Badge_Staff_Pick_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Staff_Pick_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_staff_pick_name(inputs)
	if (locale === "de") return de_profile_badge_staff_pick_name(inputs)
	if (locale === "fr") return fr_profile_badge_staff_pick_name(inputs)
	if (locale === "it") return it_profile_badge_staff_pick_name(inputs)
	if (locale === "nl") return nl_profile_badge_staff_pick_name(inputs)
	if (locale === "pl") return pl_profile_badge_staff_pick_name(inputs)
	if (locale === "pt") return pt_profile_badge_staff_pick_name(inputs)
	if (locale === "ru") return ru_profile_badge_staff_pick_name(inputs)
	if (locale === "sv") return sv_profile_badge_staff_pick_name(inputs)
	if (locale === "tr") return tr_profile_badge_staff_pick_name(inputs)
	if (locale === "zh") return zh_profile_badge_staff_pick_name(inputs)
	if (locale === "ja") return ja_profile_badge_staff_pick_name(inputs)
	return en_profile_badge_staff_pick_name(inputs)
});
