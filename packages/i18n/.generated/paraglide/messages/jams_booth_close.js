/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_CloseInputs */

const en_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close the voting booth`)
};

const es_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar la cabina de votación`)
};

const de_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wahlkabine schließen`)
};

const fr_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer l'isoloir`)
};

const it_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi la cabina di voto`)
};

const nl_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemhokje sluiten`)
};

const pl_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknij kabinę`)
};

const pt_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar a cabine de votação`)
};

const ru_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть кабину`)
};

const sv_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng valbåset`)
};

const tr_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy kabinini kapat`)
};

const zh_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭投票亭`)
};

const ja_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票ブースを閉じる`)
};

/**
* | output |
* | --- |
* | "Close the voting booth" |
*
* @param {Jams_Booth_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_close = /** @type {((inputs?: Jams_Booth_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_close(inputs)
	if (locale === "de") return de_jams_booth_close(inputs)
	if (locale === "fr") return fr_jams_booth_close(inputs)
	if (locale === "it") return it_jams_booth_close(inputs)
	if (locale === "nl") return nl_jams_booth_close(inputs)
	if (locale === "pl") return pl_jams_booth_close(inputs)
	if (locale === "pt") return pt_jams_booth_close(inputs)
	if (locale === "ru") return ru_jams_booth_close(inputs)
	if (locale === "sv") return sv_jams_booth_close(inputs)
	if (locale === "tr") return tr_jams_booth_close(inputs)
	if (locale === "zh") return zh_jams_booth_close(inputs)
	if (locale === "ja") return ja_jams_booth_close(inputs)
	return en_jams_booth_close(inputs)
});
