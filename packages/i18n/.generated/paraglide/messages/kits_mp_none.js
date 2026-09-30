/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Mp_NoneInputs */

const en_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No multiplayer details yet.`)
};

const es_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay datos de multijugador.`)
};

const de_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Angaben zum Mehrspielermodus.`)
};

const fr_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore d’informations sur le multijoueur.`)
};

const it_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna informazione sul multigiocatore.`)
};

const nl_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen multiplayergegevens.`)
};

const pl_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak jeszcze informacji o trybie wieloosobowym.`)
};

const pt_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há dados de multijogador.`)
};

const ru_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Данных о мультиплеере пока нет.`)
};

const sv_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga uppgifter om flerspelare ännu.`)
};

const tr_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz çok oyunculu bilgisi yok.`)
};

const zh_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无多人游戏信息。`)
};

const ja_kits_mp_none = /** @type {(inputs: Kits_Mp_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイの情報はまだありません。`)
};

/**
* | output |
* | --- |
* | "No multiplayer details yet." |
*
* @param {Kits_Mp_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_mp_none = /** @type {((inputs?: Kits_Mp_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Mp_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_mp_none(inputs)
	if (locale === "de") return de_kits_mp_none(inputs)
	if (locale === "fr") return fr_kits_mp_none(inputs)
	if (locale === "it") return it_kits_mp_none(inputs)
	if (locale === "nl") return nl_kits_mp_none(inputs)
	if (locale === "pl") return pl_kits_mp_none(inputs)
	if (locale === "pt") return pt_kits_mp_none(inputs)
	if (locale === "ru") return ru_kits_mp_none(inputs)
	if (locale === "sv") return sv_kits_mp_none(inputs)
	if (locale === "tr") return tr_kits_mp_none(inputs)
	if (locale === "zh") return zh_kits_mp_none(inputs)
	if (locale === "ja") return ja_kits_mp_none(inputs)
	return en_kits_mp_none(inputs)
});
