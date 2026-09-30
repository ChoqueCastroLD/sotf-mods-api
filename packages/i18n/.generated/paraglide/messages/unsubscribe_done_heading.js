/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unsubscribe_Done_HeadingInputs */

const en_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You won’t get these emails anymore`)
};

const es_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya no recibirás estos correos`)
};

const de_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du bekommst diese E-Mails nicht mehr`)
};

const fr_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous ne recevrez plus ces e-mails`)
};

const it_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non riceverai più queste email`)
};

const nl_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je ontvangt deze e-mails niet meer`)
};

const pl_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie będziesz już dostawać tych e-maili`)
};

const pt_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você não receberá mais estes e-mails`)
};

const ru_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эти письма больше не будут приходить`)
};

const sv_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du får inte de här mejlen längre`)
};

const tr_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu e-postaları artık almayacaksın`)
};

const zh_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你将不再收到这些邮件`)
};

const ja_unsubscribe_done_heading = /** @type {(inputs: Unsubscribe_Done_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これらのメールは今後届きません`)
};

/**
* | output |
* | --- |
* | "You won’t get these emails anymore" |
*
* @param {Unsubscribe_Done_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const unsubscribe_done_heading = /** @type {((inputs?: Unsubscribe_Done_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_Done_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_unsubscribe_done_heading(inputs)
	if (locale === "de") return de_unsubscribe_done_heading(inputs)
	if (locale === "fr") return fr_unsubscribe_done_heading(inputs)
	if (locale === "it") return it_unsubscribe_done_heading(inputs)
	if (locale === "nl") return nl_unsubscribe_done_heading(inputs)
	if (locale === "pl") return pl_unsubscribe_done_heading(inputs)
	if (locale === "pt") return pt_unsubscribe_done_heading(inputs)
	if (locale === "ru") return ru_unsubscribe_done_heading(inputs)
	if (locale === "sv") return sv_unsubscribe_done_heading(inputs)
	if (locale === "tr") return tr_unsubscribe_done_heading(inputs)
	if (locale === "zh") return zh_unsubscribe_done_heading(inputs)
	if (locale === "ja") return ja_unsubscribe_done_heading(inputs)
	return en_unsubscribe_done_heading(inputs)
});
