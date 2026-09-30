/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Auto_Publish_HintInputs */

const en_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`When voting closes, results are computed and published without review.`)
};

const es_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al cerrar la votación, los resultados se calculan y publican sin revisión.`)
};

const de_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wenn die Abstimmung endet, werden die Ergebnisse ohne Prüfung berechnet und veröffentlicht.`)
};

const fr_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À la clôture du vote, les résultats sont calculés et publiés sans relecture.`)
};

const it_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla chiusura della votazione i risultati vengono calcolati e pubblicati senza revisione.`)
};

const nl_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zodra het stemmen sluit, worden de resultaten zonder controle berekend en gepubliceerd.`)
};

const pl_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Po zakończeniu głosowania wyniki są liczone i publikowane bez przeglądu.`)
};

const pt_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quando a votação encerra, os resultados são calculados e publicados sem revisão.`)
};

const ru_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`После закрытия голосования результаты подсчитываются и публикуются без проверки.`)
};

const sv_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`När röstningen stänger beräknas och publiceras resultaten utan granskning.`)
};

const tr_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylama kapandığında sonuçlar incelenmeden hesaplanır ve yayımlanır.`)
};

const zh_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票截止后，结果将不经审核自动计算并发布。`)
};

const ja_jams_editor_auto_publish_hint = /** @type {(inputs: Jams_Editor_Auto_Publish_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票終了後、確認なしで結果が集計・公開されます。`)
};

/**
* | output |
* | --- |
* | "When voting closes, results are computed and published without review." |
*
* @param {Jams_Editor_Auto_Publish_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_auto_publish_hint = /** @type {((inputs?: Jams_Editor_Auto_Publish_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Auto_Publish_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_auto_publish_hint(inputs)
	if (locale === "de") return de_jams_editor_auto_publish_hint(inputs)
	if (locale === "fr") return fr_jams_editor_auto_publish_hint(inputs)
	if (locale === "it") return it_jams_editor_auto_publish_hint(inputs)
	if (locale === "nl") return nl_jams_editor_auto_publish_hint(inputs)
	if (locale === "pl") return pl_jams_editor_auto_publish_hint(inputs)
	if (locale === "pt") return pt_jams_editor_auto_publish_hint(inputs)
	if (locale === "ru") return ru_jams_editor_auto_publish_hint(inputs)
	if (locale === "sv") return sv_jams_editor_auto_publish_hint(inputs)
	if (locale === "tr") return tr_jams_editor_auto_publish_hint(inputs)
	if (locale === "zh") return zh_jams_editor_auto_publish_hint(inputs)
	if (locale === "ja") return ja_jams_editor_auto_publish_hint(inputs)
	return en_jams_editor_auto_publish_hint(inputs)
});
