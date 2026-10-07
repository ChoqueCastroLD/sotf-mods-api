/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_DiscardedInputs */

const en_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changes discarded.`)
};

const es_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambios descartados.`)
};

const de_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen verworfen.`)
};

const fr_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifications annulées.`)
};

const it_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifiche scartate.`)
};

const nl_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen genegeerd.`)
};

const pl_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmiany odrzucone.`)
};

const pt_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterações descartadas.`)
};

const ru_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменения отменены.`)
};

const sv_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringarna förkastades.`)
};

const tr_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklikler atıldı.`)
};

const zh_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已放弃更改。`)
};

const ja_jams_editor_discarded = /** @type {(inputs: Jams_Editor_DiscardedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更を破棄しました。`)
};

/**
* | output |
* | --- |
* | "Changes discarded." |
*
* @param {Jams_Editor_DiscardedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_discarded = /** @type {((inputs?: Jams_Editor_DiscardedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_DiscardedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_discarded(inputs)
	if (locale === "de") return de_jams_editor_discarded(inputs)
	if (locale === "fr") return fr_jams_editor_discarded(inputs)
	if (locale === "it") return it_jams_editor_discarded(inputs)
	if (locale === "nl") return nl_jams_editor_discarded(inputs)
	if (locale === "pl") return pl_jams_editor_discarded(inputs)
	if (locale === "pt") return pt_jams_editor_discarded(inputs)
	if (locale === "ru") return ru_jams_editor_discarded(inputs)
	if (locale === "sv") return sv_jams_editor_discarded(inputs)
	if (locale === "tr") return tr_jams_editor_discarded(inputs)
	if (locale === "zh") return zh_jams_editor_discarded(inputs)
	if (locale === "ja") return ja_jams_editor_discarded(inputs)
	return en_jams_editor_discarded(inputs)
});
