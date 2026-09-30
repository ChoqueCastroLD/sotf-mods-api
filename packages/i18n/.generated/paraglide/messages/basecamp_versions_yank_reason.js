/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Yank_ReasonInputs */

const en_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reason shown to players`)
};

const es_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo que verán los jugadores`)
};

const de_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grund, den Spieler sehen`)
};

const fr_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motif affiché aux joueurs`)
};

const it_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo mostrato ai giocatori`)
};

const nl_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reden die spelers zien`)
};

const pl_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powód widoczny dla graczy`)
};

const pt_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo exibido aos jogadores`)
};

const ru_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Причина, которую увидят игроки`)
};

const sv_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orsak som spelare ser`)
};

const tr_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunculara gösterilecek neden`)
};

const zh_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`向玩家显示的原因`)
};

const ja_basecamp_versions_yank_reason = /** @type {(inputs: Basecamp_Versions_Yank_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーに表示する理由`)
};

/**
* | output |
* | --- |
* | "Reason shown to players" |
*
* @param {Basecamp_Versions_Yank_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_yank_reason = /** @type {((inputs?: Basecamp_Versions_Yank_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Yank_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_yank_reason(inputs)
	if (locale === "de") return de_basecamp_versions_yank_reason(inputs)
	if (locale === "fr") return fr_basecamp_versions_yank_reason(inputs)
	if (locale === "it") return it_basecamp_versions_yank_reason(inputs)
	if (locale === "nl") return nl_basecamp_versions_yank_reason(inputs)
	if (locale === "pl") return pl_basecamp_versions_yank_reason(inputs)
	if (locale === "pt") return pt_basecamp_versions_yank_reason(inputs)
	if (locale === "ru") return ru_basecamp_versions_yank_reason(inputs)
	if (locale === "sv") return sv_basecamp_versions_yank_reason(inputs)
	if (locale === "tr") return tr_basecamp_versions_yank_reason(inputs)
	if (locale === "zh") return zh_basecamp_versions_yank_reason(inputs)
	if (locale === "ja") return ja_basecamp_versions_yank_reason(inputs)
	return en_basecamp_versions_yank_reason(inputs)
});
