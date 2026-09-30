/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Night_Owl_HintInputs */

const en_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make 5 contributions between midnight and 4 a.m. your time.`)
};

const es_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haz 5 contribuciones entre la medianoche y las 4 de la madrugada, en tu hora local.`)
};

const de_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leiste 5 Beiträge zwischen Mitternacht und 4 Uhr morgens nach deiner Ortszeit.`)
};

const fr_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faites 5 contributions entre minuit et 4 h du matin, heure locale.`)
};

const it_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fai 5 contributi tra mezzanotte e le 4 del mattino, ora locale.`)
};

const nl_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lever 5 bijdragen tussen middernacht en 4 uur ’s nachts, in je eigen tijd.`)
};

const pl_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wnieś 5 wkładów między północą a 4 rano czasu lokalnego.`)
};

const pt_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faça 5 contribuições entre meia-noite e 4 da manhã no seu horário.`)
};

const ru_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сделайте 5 вкладов между полуночью и 4 часами утра по местному времени.`)
};

const sv_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gör 5 bidrag mellan midnatt och klockan 4 på natten, lokal tid.`)
};

const tr_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kendi saatinle gece yarısı ile sabah 4 arasında 5 katkı yap.`)
};

const zh_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在当地时间午夜至凌晨 4 点之间做出 5 次贡献。`)
};

const ja_profile_badge_night_owl_hint = /** @type {(inputs: Profile_Badge_Night_Owl_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現地時間の午前 0 時から 4 時の間に 5 回貢献する。`)
};

/**
* | output |
* | --- |
* | "Make 5 contributions between midnight and 4 a.m. your time." |
*
* @param {Profile_Badge_Night_Owl_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_night_owl_hint = /** @type {((inputs?: Profile_Badge_Night_Owl_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Night_Owl_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_night_owl_hint(inputs)
	if (locale === "de") return de_profile_badge_night_owl_hint(inputs)
	if (locale === "fr") return fr_profile_badge_night_owl_hint(inputs)
	if (locale === "it") return it_profile_badge_night_owl_hint(inputs)
	if (locale === "nl") return nl_profile_badge_night_owl_hint(inputs)
	if (locale === "pl") return pl_profile_badge_night_owl_hint(inputs)
	if (locale === "pt") return pt_profile_badge_night_owl_hint(inputs)
	if (locale === "ru") return ru_profile_badge_night_owl_hint(inputs)
	if (locale === "sv") return sv_profile_badge_night_owl_hint(inputs)
	if (locale === "tr") return tr_profile_badge_night_owl_hint(inputs)
	if (locale === "zh") return zh_profile_badge_night_owl_hint(inputs)
	if (locale === "ja") return ja_profile_badge_night_owl_hint(inputs)
	return en_profile_badge_night_owl_hint(inputs)
});
