/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Min_ActivityInputs */

const en_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimum activity to vote`)
};

const es_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actividad mínima para votar`)
};

const de_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mindestaktivität zum Abstimmen`)
};

const fr_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activité minimale pour voter`)
};

const it_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attività minima per votare`)
};

const nl_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimale activiteit om te stemmen`)
};

const pl_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minimalna aktywność do głosowania`)
};

const pt_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atividade mínima para votar`)
};

const ru_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Минимальная активность для голосования`)
};

const sv_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minsta aktivitet för att rösta`)
};

const tr_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy vermek için asgari etkinlik`)
};

const zh_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票所需的最低活跃度`)
};

const ja_jams_editor_min_activity = /** @type {(inputs: Jams_Editor_Min_ActivityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票に必要な最低限の活動量`)
};

/**
* | output |
* | --- |
* | "Minimum activity to vote" |
*
* @param {Jams_Editor_Min_ActivityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_min_activity = /** @type {((inputs?: Jams_Editor_Min_ActivityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Min_ActivityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_min_activity(inputs)
	if (locale === "de") return de_jams_editor_min_activity(inputs)
	if (locale === "fr") return fr_jams_editor_min_activity(inputs)
	if (locale === "it") return it_jams_editor_min_activity(inputs)
	if (locale === "nl") return nl_jams_editor_min_activity(inputs)
	if (locale === "pl") return pl_jams_editor_min_activity(inputs)
	if (locale === "pt") return pt_jams_editor_min_activity(inputs)
	if (locale === "ru") return ru_jams_editor_min_activity(inputs)
	if (locale === "sv") return sv_jams_editor_min_activity(inputs)
	if (locale === "tr") return tr_jams_editor_min_activity(inputs)
	if (locale === "zh") return zh_jams_editor_min_activity(inputs)
	if (locale === "ja") return ja_jams_editor_min_activity(inputs)
	return en_jams_editor_min_activity(inputs)
});
