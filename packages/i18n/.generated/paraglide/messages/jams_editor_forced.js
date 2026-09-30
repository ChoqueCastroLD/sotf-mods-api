/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ phase: NonNullable<unknown> }} Jams_Editor_ForcedInputs */

const en_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam moved to "${i?.phase}".`)
};

const es_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam movido a «${i?.phase}».`)
};

const de_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam auf „${i?.phase}“ gesetzt.`)
};

const fr_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam passé à « ${i?.phase} ».`)
};

const it_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam spostato a «${i?.phase}».`)
};

const nl_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam verplaatst naar "${i?.phase}".`)
};

const pl_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam przeniesiono do fazy „${i?.phase}”.`)
};

const pt_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam movido para "${i?.phase}".`)
};

const ru_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Джем переведён в фазу «${i?.phase}».`)
};

const sv_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jammen flyttades till "${i?.phase}".`)
};

const tr_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam "${i?.phase}" aşamasına alındı.`)
};

const zh_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam 已切换到「${i?.phase}」。`)
};

const ja_jams_editor_forced = /** @type {(inputs: Jams_Editor_ForcedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ジャムを「${i?.phase}」に移しました。`)
};

/**
* | output |
* | --- |
* | "Jam moved to \"{phase}\"." |
*
* @param {Jams_Editor_ForcedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_forced = /** @type {((inputs: Jams_Editor_ForcedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_ForcedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_forced(inputs)
	if (locale === "de") return de_jams_editor_forced(inputs)
	if (locale === "fr") return fr_jams_editor_forced(inputs)
	if (locale === "it") return it_jams_editor_forced(inputs)
	if (locale === "nl") return nl_jams_editor_forced(inputs)
	if (locale === "pl") return pl_jams_editor_forced(inputs)
	if (locale === "pt") return pt_jams_editor_forced(inputs)
	if (locale === "ru") return ru_jams_editor_forced(inputs)
	if (locale === "sv") return sv_jams_editor_forced(inputs)
	if (locale === "tr") return tr_jams_editor_forced(inputs)
	if (locale === "zh") return zh_jams_editor_forced(inputs)
	if (locale === "ja") return ja_jams_editor_forced(inputs)
	return en_jams_editor_forced(inputs)
});
