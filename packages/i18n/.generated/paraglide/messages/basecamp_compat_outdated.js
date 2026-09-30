/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_OutdatedInputs */

const en_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Possibly outdated: the game changed since the last version.`)
};

const es_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posiblemente desactualizado: el juego cambió desde la última versión.`)
};

const de_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Möglicherweise veraltet: das Spiel hat sich seit der letzten Version geändert.`)
};

const fr_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peut-être obsolète : le jeu a changé depuis la dernière version.`)
};

const it_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forse obsoleta: il gioco è cambiato dall’ultima versione.`)
};

const nl_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mogelijk verouderd: de game is veranderd sinds de laatste versie.`)
};

const pl_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Możliwe, że nieaktualny: gra zmieniła się od ostatniej wersji.`)
};

const pt_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Possivelmente desatualizado: o jogo mudou desde a última versão.`)
};

const ru_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Возможно, устарел: игра изменилась после последней версии.`)
};

const sv_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanske inaktuell: spelet har ändrats sedan den senaste versionen.`)
};

const tr_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncelliğini yitirmiş olabilir: son sürümden beri oyun değişti.`)
};

const zh_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可能已过时：自上个版本以来游戏已更新。`)
};

const ja_basecamp_compat_outdated = /** @type {(inputs: Basecamp_Compat_OutdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`古い可能性があります：最新バージョン以降にゲームが更新されています。`)
};

/**
* | output |
* | --- |
* | "Possibly outdated: the game changed since the last version." |
*
* @param {Basecamp_Compat_OutdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_outdated = /** @type {((inputs?: Basecamp_Compat_OutdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_OutdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_outdated(inputs)
	if (locale === "de") return de_basecamp_compat_outdated(inputs)
	if (locale === "fr") return fr_basecamp_compat_outdated(inputs)
	if (locale === "it") return it_basecamp_compat_outdated(inputs)
	if (locale === "nl") return nl_basecamp_compat_outdated(inputs)
	if (locale === "pl") return pl_basecamp_compat_outdated(inputs)
	if (locale === "pt") return pt_basecamp_compat_outdated(inputs)
	if (locale === "ru") return ru_basecamp_compat_outdated(inputs)
	if (locale === "sv") return sv_basecamp_compat_outdated(inputs)
	if (locale === "tr") return tr_basecamp_compat_outdated(inputs)
	if (locale === "zh") return zh_basecamp_compat_outdated(inputs)
	if (locale === "ja") return ja_basecamp_compat_outdated(inputs)
	return en_basecamp_compat_outdated(inputs)
});
