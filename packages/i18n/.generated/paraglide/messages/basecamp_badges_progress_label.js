/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Badges_Progress_LabelInputs */

const en_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progress towards ${i?.name}`)
};

const es_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progreso hacia ${i?.name}`)
};

const de_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fortschritt zu ${i?.name}`)
};

const fr_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progression vers ${i?.name}`)
};

const it_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progressi verso ${i?.name}`)
};

const nl_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Voortgang naar ${i?.name}`)
};

const pl_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Postęp do odznaki ${i?.name}`)
};

const pt_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Progresso até ${i?.name}`)
};

const ru_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Прогресс к значку ${i?.name}`)
};

const sv_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Framsteg mot ${i?.name}`)
};

const tr_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} rozetine ilerleme`)
};

const zh_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 进度`)
};

const ja_basecamp_badges_progress_label = /** @type {(inputs: Basecamp_Badges_Progress_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} までの進捗`)
};

/**
* | output |
* | --- |
* | "Progress towards {name}" |
*
* @param {Basecamp_Badges_Progress_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_progress_label = /** @type {((inputs: Basecamp_Badges_Progress_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Progress_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_progress_label(inputs)
	if (locale === "de") return de_basecamp_badges_progress_label(inputs)
	if (locale === "fr") return fr_basecamp_badges_progress_label(inputs)
	if (locale === "it") return it_basecamp_badges_progress_label(inputs)
	if (locale === "nl") return nl_basecamp_badges_progress_label(inputs)
	if (locale === "pl") return pl_basecamp_badges_progress_label(inputs)
	if (locale === "pt") return pt_basecamp_badges_progress_label(inputs)
	if (locale === "ru") return ru_basecamp_badges_progress_label(inputs)
	if (locale === "sv") return sv_basecamp_badges_progress_label(inputs)
	if (locale === "tr") return tr_basecamp_badges_progress_label(inputs)
	if (locale === "zh") return zh_basecamp_badges_progress_label(inputs)
	if (locale === "ja") return ja_basecamp_badges_progress_label(inputs)
	return en_basecamp_badges_progress_label(inputs)
});
