/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Stats_ErrorInputs */

const en_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The chart could not load. Try again.`)
};

const es_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cargar el gráfico. Inténtalo de nuevo.`)
};

const de_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Diagramm konnte nicht geladen werden. Versuche es erneut.`)
};

const fr_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le graphique n’a pas pu se charger. Réessayez.`)
};

const it_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare il grafico. Riprova.`)
};

const nl_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De grafiek kon niet worden geladen. Probeer het opnieuw.`)
};

const pl_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać wykresu. Spróbuj ponownie.`)
};

const pt_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar o gráfico. Tente novamente.`)
};

const ru_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить график. Попробуйте ещё раз.`)
};

const sv_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diagrammet kunde inte laddas. Försök igen.`)
};

const tr_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grafik yüklenemedi. Tekrar dene.`)
};

const zh_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图表加载失败，请重试。`)
};

const ja_mod_stats_error = /** @type {(inputs: Mod_Stats_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`グラフを読み込めませんでした。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The chart could not load. Try again." |
*
* @param {Mod_Stats_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_stats_error = /** @type {((inputs?: Mod_Stats_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_stats_error(inputs)
	if (locale === "de") return de_mod_stats_error(inputs)
	if (locale === "fr") return fr_mod_stats_error(inputs)
	if (locale === "it") return it_mod_stats_error(inputs)
	if (locale === "nl") return nl_mod_stats_error(inputs)
	if (locale === "pl") return pl_mod_stats_error(inputs)
	if (locale === "pt") return pt_mod_stats_error(inputs)
	if (locale === "ru") return ru_mod_stats_error(inputs)
	if (locale === "sv") return sv_mod_stats_error(inputs)
	if (locale === "tr") return tr_mod_stats_error(inputs)
	if (locale === "zh") return zh_mod_stats_error(inputs)
	if (locale === "ja") return ja_mod_stats_error(inputs)
	return en_mod_stats_error(inputs)
});
