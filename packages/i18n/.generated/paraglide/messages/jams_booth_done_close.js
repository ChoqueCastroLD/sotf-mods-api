/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_Done_CloseInputs */

const en_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to the jam`)
};

const es_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver al jam`)
};

const de_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zum Jam`)
};

const fr_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour au jam`)
};

const it_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna al jam`)
};

const nl_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar de jam`)
};

const pl_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do jamu`)
};

const pt_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar ao jam`)
};

const ru_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вернуться к джему`)
};

const sv_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till jammen`)
};

const tr_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam'e dön`)
};

const zh_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回 Jam`)
};

const ja_jams_booth_done_close = /** @type {(inputs: Jams_Booth_Done_CloseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムに戻る`)
};

/**
* | output |
* | --- |
* | "Back to the jam" |
*
* @param {Jams_Booth_Done_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_done_close = /** @type {((inputs?: Jams_Booth_Done_CloseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_Done_CloseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_done_close(inputs)
	if (locale === "de") return de_jams_booth_done_close(inputs)
	if (locale === "fr") return fr_jams_booth_done_close(inputs)
	if (locale === "it") return it_jams_booth_done_close(inputs)
	if (locale === "nl") return nl_jams_booth_done_close(inputs)
	if (locale === "pl") return pl_jams_booth_done_close(inputs)
	if (locale === "pt") return pt_jams_booth_done_close(inputs)
	if (locale === "ru") return ru_jams_booth_done_close(inputs)
	if (locale === "sv") return sv_jams_booth_done_close(inputs)
	if (locale === "tr") return tr_jams_booth_done_close(inputs)
	if (locale === "zh") return zh_jams_booth_done_close(inputs)
	if (locale === "ja") return ja_jams_booth_done_close(inputs)
	return en_jams_booth_done_close(inputs)
});
