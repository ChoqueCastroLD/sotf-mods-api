/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Force_PhaseInputs */

const en_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Force phase`)
};

const es_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forzar fase`)
};

const de_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Phase erzwingen`)
};

const fr_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forcer la phase`)
};

const it_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forza fase`)
};

const nl_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fase forceren`)
};

const pl_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymuś fazę`)
};

const pt_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forçar fase`)
};

const ru_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Принудительная фаза`)
};

const sv_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tvinga fas`)
};

const tr_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aşamayı zorla`)
};

const zh_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`强制切换阶段`)
};

const ja_jams_editor_force_phase = /** @type {(inputs: Jams_Editor_Force_PhaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フェーズを強制`)
};

/**
* | output |
* | --- |
* | "Force phase" |
*
* @param {Jams_Editor_Force_PhaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_force_phase = /** @type {((inputs?: Jams_Editor_Force_PhaseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Force_PhaseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_force_phase(inputs)
	if (locale === "de") return de_jams_editor_force_phase(inputs)
	if (locale === "fr") return fr_jams_editor_force_phase(inputs)
	if (locale === "it") return it_jams_editor_force_phase(inputs)
	if (locale === "nl") return nl_jams_editor_force_phase(inputs)
	if (locale === "pl") return pl_jams_editor_force_phase(inputs)
	if (locale === "pt") return pt_jams_editor_force_phase(inputs)
	if (locale === "ru") return ru_jams_editor_force_phase(inputs)
	if (locale === "sv") return sv_jams_editor_force_phase(inputs)
	if (locale === "tr") return tr_jams_editor_force_phase(inputs)
	if (locale === "zh") return zh_jams_editor_force_phase(inputs)
	if (locale === "ja") return ja_jams_editor_force_phase(inputs)
	return en_jams_editor_force_phase(inputs)
});
