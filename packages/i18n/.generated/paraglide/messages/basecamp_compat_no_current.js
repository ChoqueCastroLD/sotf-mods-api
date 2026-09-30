/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_No_CurrentInputs */

const en_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No reports on the current game build yet.`)
};

const es_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay reportes en la build actual del juego.`)
};

const de_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Berichte zum aktuellen Spiel-Build.`)
};

const fr_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun rapport sur le build actuel du jeu pour l’instant.`)
};

const it_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun rapporto sulla build attuale del gioco.`)
};

const nl_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen rapporten op de huidige gamebuild.`)
};

const pl_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak raportów dla obecnego buildu gry.`)
};

const pt_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há relatórios na build atual do jogo.`)
};

const ru_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отчётов по текущему билду игры пока нет.`)
};

const sv_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga rapporter för spelets aktuella build än.`)
};

const tr_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncel oyun sürümü için henüz rapor yok.`)
};

const zh_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前游戏版本还没有报告。`)
};

const ja_basecamp_compat_no_current = /** @type {(inputs: Basecamp_Compat_No_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のゲームビルドのレポートはまだありません。`)
};

/**
* | output |
* | --- |
* | "No reports on the current game build yet." |
*
* @param {Basecamp_Compat_No_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_no_current = /** @type {((inputs?: Basecamp_Compat_No_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_No_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_no_current(inputs)
	if (locale === "de") return de_basecamp_compat_no_current(inputs)
	if (locale === "fr") return fr_basecamp_compat_no_current(inputs)
	if (locale === "it") return it_basecamp_compat_no_current(inputs)
	if (locale === "nl") return nl_basecamp_compat_no_current(inputs)
	if (locale === "pl") return pl_basecamp_compat_no_current(inputs)
	if (locale === "pt") return pt_basecamp_compat_no_current(inputs)
	if (locale === "ru") return ru_basecamp_compat_no_current(inputs)
	if (locale === "sv") return sv_basecamp_compat_no_current(inputs)
	if (locale === "tr") return tr_basecamp_compat_no_current(inputs)
	if (locale === "zh") return zh_basecamp_compat_no_current(inputs)
	if (locale === "ja") return ja_basecamp_compat_no_current(inputs)
	return en_basecamp_compat_no_current(inputs)
});
