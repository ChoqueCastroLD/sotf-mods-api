/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_CloseInputs */

const en_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close voting view`)
};

const es_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar la vista de votación`)
};

const de_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abstimmungsansicht schließen`)
};

const fr_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer la vue du vote`)
};

const it_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi la schermata di voto`)
};

const nl_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemscherm sluiten`)
};

const pl_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknij widok głosowania`)
};

const pt_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar a tela de votação`)
};

const ru_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть окно голосования`)
};

const sv_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng röstningsvyn`)
};

const tr_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylama görünümünü kapat`)
};

const zh_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭投票界面`)
};

const ja_jams_booth_close = /** @type {(inputs: Jams_Booth_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票画面を閉じる`)
};

/**
* | output |
* | --- |
* | "Close voting view" |
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
