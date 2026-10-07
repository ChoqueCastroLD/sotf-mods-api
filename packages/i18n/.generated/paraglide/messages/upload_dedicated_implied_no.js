/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dedicated_Implied_NoInputs */

const en_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. This mod runs only in the player’s own game.`)
};

const es_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. Este mod solo funciona en el juego de cada jugador.`)
};

const de_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nein. Dieser Mod läuft nur im Spiel der Spieler.`)
};

const fr_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non. Ce mod fonctionne uniquement dans le jeu du joueur.`)
};

const it_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. Questa mod funziona solo nel gioco del giocatore.`)
};

const nl_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nee. Deze mod draait alleen in het spel van de speler zelf.`)
};

const pl_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie. Ten mod działa tylko w grze samego gracza.`)
};

const pt_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não. Este mod roda só no jogo do próprio jogador.`)
};

const ru_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет. Этот мод работает только в игре самого игрока.`)
};

const sv_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nej. Den här modden körs bara i spelarens eget spel.`)
};

const tr_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayır. Bu mod yalnızca oyuncunun kendi oyununda çalışır.`)
};

const zh_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`否。这个模组只在玩家自己的游戏中运行。`)
};

const ja_upload_dedicated_implied_no = /** @type {(inputs: Upload_Dedicated_Implied_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`いいえ。このMODはプレイヤー自身のゲーム内でのみ動作します。`)
};

/**
* | output |
* | --- |
* | "No. This mod runs only in the player’s own game." |
*
* @param {Upload_Dedicated_Implied_NoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dedicated_implied_no = /** @type {((inputs?: Upload_Dedicated_Implied_NoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dedicated_Implied_NoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dedicated_implied_no(inputs)
	if (locale === "de") return de_upload_dedicated_implied_no(inputs)
	if (locale === "fr") return fr_upload_dedicated_implied_no(inputs)
	if (locale === "it") return it_upload_dedicated_implied_no(inputs)
	if (locale === "nl") return nl_upload_dedicated_implied_no(inputs)
	if (locale === "pl") return pl_upload_dedicated_implied_no(inputs)
	if (locale === "pt") return pt_upload_dedicated_implied_no(inputs)
	if (locale === "ru") return ru_upload_dedicated_implied_no(inputs)
	if (locale === "sv") return sv_upload_dedicated_implied_no(inputs)
	if (locale === "tr") return tr_upload_dedicated_implied_no(inputs)
	if (locale === "zh") return zh_upload_dedicated_implied_no(inputs)
	if (locale === "ja") return ja_upload_dedicated_implied_no(inputs)
	return en_upload_dedicated_implied_no(inputs)
});
