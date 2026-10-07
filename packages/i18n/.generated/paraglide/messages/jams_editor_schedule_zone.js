/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ zone: NonNullable<unknown> }} Jams_Editor_Schedule_ZoneInputs */

const en_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your time zone is ${i?.zone}.`)
};

const es_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tu zona horaria es ${i?.zone}.`)
};

const de_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deine Zeitzone ist ${i?.zone}.`)
};

const fr_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre fuseau horaire est ${i?.zone}.`)
};

const it_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il tuo fuso orario è ${i?.zone}.`)
};

const nl_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je tijdzone is ${i?.zone}.`)
};

const pl_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Twoja strefa czasowa to ${i?.zone}.`)
};

const pt_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seu fuso horário é ${i?.zone}.`)
};

const ru_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ваш часовой пояс: ${i?.zone}.`)
};

const sv_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Din tidszon är ${i?.zone}.`)
};

const tr_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Saat diliminiz ${i?.zone}.`)
};

const zh_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`您的时区是 ${i?.zone}。`)
};

const ja_jams_editor_schedule_zone = /** @type {(inputs: Jams_Editor_Schedule_ZoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`お使いのタイムゾーンは ${i?.zone} です。`)
};

/**
* | output |
* | --- |
* | "Your time zone is {zone}." |
*
* @param {Jams_Editor_Schedule_ZoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_schedule_zone = /** @type {((inputs: Jams_Editor_Schedule_ZoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_ZoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_schedule_zone(inputs)
	if (locale === "de") return de_jams_editor_schedule_zone(inputs)
	if (locale === "fr") return fr_jams_editor_schedule_zone(inputs)
	if (locale === "it") return it_jams_editor_schedule_zone(inputs)
	if (locale === "nl") return nl_jams_editor_schedule_zone(inputs)
	if (locale === "pl") return pl_jams_editor_schedule_zone(inputs)
	if (locale === "pt") return pt_jams_editor_schedule_zone(inputs)
	if (locale === "ru") return ru_jams_editor_schedule_zone(inputs)
	if (locale === "sv") return sv_jams_editor_schedule_zone(inputs)
	if (locale === "tr") return tr_jams_editor_schedule_zone(inputs)
	if (locale === "zh") return zh_jams_editor_schedule_zone(inputs)
	if (locale === "ja") return ja_jams_editor_schedule_zone(inputs)
	return en_jams_editor_schedule_zone(inputs)
});
