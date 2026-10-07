/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Next_StepInputs */

const en_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next step`)
};

const es_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiente paso`)
};

const de_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nächster Schritt`)
};

const fr_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étape suivante`)
};

const it_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passo successivo`)
};

const nl_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgende stap`)
};

const pl_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następny krok`)
};

const pt_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próximo passo`)
};

const ru_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следующий шаг`)
};

const sv_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa steg`)
};

const tr_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonraki adım`)
};

const zh_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一步`)
};

const ja_jams_editor_next_step = /** @type {(inputs: Jams_Editor_Next_StepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次のステップ`)
};

/**
* | output |
* | --- |
* | "Next step" |
*
* @param {Jams_Editor_Next_StepInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_next_step = /** @type {((inputs?: Jams_Editor_Next_StepInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Next_StepInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_next_step(inputs)
	if (locale === "de") return de_jams_editor_next_step(inputs)
	if (locale === "fr") return fr_jams_editor_next_step(inputs)
	if (locale === "it") return it_jams_editor_next_step(inputs)
	if (locale === "nl") return nl_jams_editor_next_step(inputs)
	if (locale === "pl") return pl_jams_editor_next_step(inputs)
	if (locale === "pt") return pt_jams_editor_next_step(inputs)
	if (locale === "ru") return ru_jams_editor_next_step(inputs)
	if (locale === "sv") return sv_jams_editor_next_step(inputs)
	if (locale === "tr") return tr_jams_editor_next_step(inputs)
	if (locale === "zh") return zh_jams_editor_next_step(inputs)
	if (locale === "ja") return ja_jams_editor_next_step(inputs)
	return en_jams_editor_next_step(inputs)
});
