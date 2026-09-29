/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Server_TitleInputs */

const en_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something broke at base camp.`)
};

const es_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo se rompió en el campamento.`)
};

const de_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Im Basislager ist etwas kaputtgegangen.`)
};

const fr_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelque chose a cassé au camp de base.`)
};

const it_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcosa si è rotto al campo base.`)
};

const nl_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ging iets kapot in het basiskamp.`)
};

const pl_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś się zepsuło w obozie.`)
};

const pt_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algo quebrou no acampamento.`)
};

const ru_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В лагере что-то сломалось.`)
};

const sv_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något gick sönder i baslägret.`)
};

const tr_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana kampta bir şey bozuldu.`)
};

const zh_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`营地出了点故障。`)
};

const ja_errors_server_title = /** @type {(inputs: Errors_Server_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベースキャンプで不具合が発生しました。`)
};

/**
* | output |
* | --- |
* | "Something broke at base camp." |
*
* @param {Errors_Server_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_server_title = /** @type {((inputs?: Errors_Server_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Server_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_server_title(inputs)
	if (locale === "de") return de_errors_server_title(inputs)
	if (locale === "fr") return fr_errors_server_title(inputs)
	if (locale === "it") return it_errors_server_title(inputs)
	if (locale === "nl") return nl_errors_server_title(inputs)
	if (locale === "pl") return pl_errors_server_title(inputs)
	if (locale === "pt") return pt_errors_server_title(inputs)
	if (locale === "ru") return ru_errors_server_title(inputs)
	if (locale === "sv") return sv_errors_server_title(inputs)
	if (locale === "tr") return tr_errors_server_title(inputs)
	if (locale === "zh") return zh_errors_server_title(inputs)
	if (locale === "ja") return ja_errors_server_title(inputs)
	return en_errors_server_title(inputs)
});
