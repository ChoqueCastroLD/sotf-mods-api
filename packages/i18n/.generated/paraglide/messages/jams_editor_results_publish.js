/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Results_PublishInputs */

const en_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compute and publish results`)
};

const es_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calcular y publicar resultados`)
};

const de_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergebnisse berechnen und veröffentlichen`)
};

const fr_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calculer et publier les résultats`)
};

const it_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calcola e pubblica i risultati`)
};

const nl_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten berekenen en publiceren`)
};

const pl_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oblicz i opublikuj wyniki`)
};

const pt_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calcular e publicar resultados`)
};

const ru_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подсчитать и опубликовать результаты`)
};

const sv_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beräkna och publicera resultat`)
};

const tr_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçları hesapla ve yayımla`)
};

const zh_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`计算并发布结果`)
};

const ja_jams_editor_results_publish = /** @type {(inputs: Jams_Editor_Results_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果を集計して公開`)
};

/**
* | output |
* | --- |
* | "Compute and publish results" |
*
* @param {Jams_Editor_Results_PublishInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_results_publish = /** @type {((inputs?: Jams_Editor_Results_PublishInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Results_PublishInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_results_publish(inputs)
	if (locale === "de") return de_jams_editor_results_publish(inputs)
	if (locale === "fr") return fr_jams_editor_results_publish(inputs)
	if (locale === "it") return it_jams_editor_results_publish(inputs)
	if (locale === "nl") return nl_jams_editor_results_publish(inputs)
	if (locale === "pl") return pl_jams_editor_results_publish(inputs)
	if (locale === "pt") return pt_jams_editor_results_publish(inputs)
	if (locale === "ru") return ru_jams_editor_results_publish(inputs)
	if (locale === "sv") return sv_jams_editor_results_publish(inputs)
	if (locale === "tr") return tr_jams_editor_results_publish(inputs)
	if (locale === "zh") return zh_jams_editor_results_publish(inputs)
	if (locale === "ja") return ja_jams_editor_results_publish(inputs)
	return en_jams_editor_results_publish(inputs)
});
