/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Preview_Filter_HintInputs */

const en_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Press Enter to apply this filter.`)
};

const es_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulsa Enter para aplicar este filtro.`)
};

const de_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drücke Enter, um diesen Filter anzuwenden.`)
};

const fr_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appuyez sur Entrée pour appliquer ce filtre.`)
};

const it_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premi Invio per applicare questo filtro.`)
};

const nl_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Druk op Enter om dit filter toe te passen.`)
};

const pl_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naciśnij Enter, aby zastosować ten filtr.`)
};

const pt_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima Enter para aplicar este filtro.`)
};

const ru_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нажмите Enter, чтобы применить фильтр.`)
};

const sv_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryck Enter för att använda filtret.`)
};

const tr_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu filtreyi uygulamak için Enter’a basın.`)
};

const zh_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按 Enter 应用此筛选。`)
};

const ja_cmdk_preview_filter_hint = /** @type {(inputs: Cmdk_Preview_Filter_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter でこのフィルターを適用します。`)
};

/**
* | output |
* | --- |
* | "Press Enter to apply this filter." |
*
* @param {Cmdk_Preview_Filter_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_preview_filter_hint = /** @type {((inputs?: Cmdk_Preview_Filter_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Preview_Filter_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_preview_filter_hint(inputs)
	if (locale === "de") return de_cmdk_preview_filter_hint(inputs)
	if (locale === "fr") return fr_cmdk_preview_filter_hint(inputs)
	if (locale === "it") return it_cmdk_preview_filter_hint(inputs)
	if (locale === "nl") return nl_cmdk_preview_filter_hint(inputs)
	if (locale === "pl") return pl_cmdk_preview_filter_hint(inputs)
	if (locale === "pt") return pt_cmdk_preview_filter_hint(inputs)
	if (locale === "ru") return ru_cmdk_preview_filter_hint(inputs)
	if (locale === "sv") return sv_cmdk_preview_filter_hint(inputs)
	if (locale === "tr") return tr_cmdk_preview_filter_hint(inputs)
	if (locale === "zh") return zh_cmdk_preview_filter_hint(inputs)
	if (locale === "ja") return ja_cmdk_preview_filter_hint(inputs)
	return en_cmdk_preview_filter_hint(inputs)
});
