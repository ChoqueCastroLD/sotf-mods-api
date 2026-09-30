/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Not_Found_DetailInputs */

const en_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There’s nothing at this address inside the console. It may have moved.`)
};

const es_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay nada en esta dirección dentro de la consola. Puede que se haya movido.`)
};

const de_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unter dieser Adresse gibt es in der Konsole nichts. Vielleicht wurde es verschoben.`)
};

const fr_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il n’y a rien à cette adresse dans la console. Elle a peut-être été déplacée.`)
};

const it_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non c’è niente a questo indirizzo nella console. Potrebbe essere stato spostato.`)
};

const nl_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is niets op dit adres in de console. Misschien is het verplaatst.`)
};

const pl_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pod tym adresem w konsoli nic nie ma. Być może zostało przeniesione.`)
};

const pt_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não há nada neste endereço dentro do console. Talvez tenha sido movido.`)
};

const ru_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По этому адресу в консоли ничего нет. Возможно, страницу перенесли.`)
};

const sv_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns inget på den här adressen i konsolen. Den kan ha flyttats.`)
};

const tr_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konsolda bu adreste hiçbir şey yok. Taşınmış olabilir.`)
};

const zh_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制台中这个地址什么都没有，可能已被移动。`)
};

const ja_console_not_found_detail = /** @type {(inputs: Console_Not_Found_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンソールのこのアドレスには何もありません。移動した可能性があります。`)
};

/**
* | output |
* | --- |
* | "There’s nothing at this address inside the console. It may have moved." |
*
* @param {Console_Not_Found_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_not_found_detail = /** @type {((inputs?: Console_Not_Found_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Not_Found_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_not_found_detail(inputs)
	if (locale === "de") return de_console_not_found_detail(inputs)
	if (locale === "fr") return fr_console_not_found_detail(inputs)
	if (locale === "it") return it_console_not_found_detail(inputs)
	if (locale === "nl") return nl_console_not_found_detail(inputs)
	if (locale === "pl") return pl_console_not_found_detail(inputs)
	if (locale === "pt") return pt_console_not_found_detail(inputs)
	if (locale === "ru") return ru_console_not_found_detail(inputs)
	if (locale === "sv") return sv_console_not_found_detail(inputs)
	if (locale === "tr") return tr_console_not_found_detail(inputs)
	if (locale === "zh") return zh_console_not_found_detail(inputs)
	if (locale === "ja") return ja_console_not_found_detail(inputs)
	return en_console_not_found_detail(inputs)
});
