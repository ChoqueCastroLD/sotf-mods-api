/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Langprompt_Remember_HintInputs */

const en_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Don't ask again and apply it automatically next time.`)
};

const es_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No volver a preguntar y aplicarla automáticamente la próxima vez.`)
};

const de_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht mehr fragen und beim nächsten Mal automatisch anwenden.`)
};

const fr_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne plus demander et l’appliquer automatiquement la prochaine fois.`)
};

const it_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non chiedere più e applicala automaticamente la prossima volta.`)
};

const nl_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet meer vragen en de volgende keer automatisch toepassen.`)
};

const pl_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie pytaj ponownie i stosuj automatycznie następnym razem.`)
};

const pt_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não perguntar de novo e aplicar automaticamente da próxima vez.`)
};

const ru_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше не спрашивать и применять автоматически в следующий раз.`)
};

const sv_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fråga inte igen och tillämpa det automatiskt nästa gång.`)
};

const tr_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir daha sorma ve bir dahaki sefere otomatik uygula.`)
};

const zh_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不再询问，下次自动应用。`)
};

const ja_langprompt_remember_hint = /** @type {(inputs: Langprompt_Remember_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次回から確認せず、自動的に適用します。`)
};

/**
* | output |
* | --- |
* | "Don't ask again and apply it automatically next time." |
*
* @param {Langprompt_Remember_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const langprompt_remember_hint = /** @type {((inputs?: Langprompt_Remember_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Langprompt_Remember_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_langprompt_remember_hint(inputs)
	if (locale === "de") return de_langprompt_remember_hint(inputs)
	if (locale === "fr") return fr_langprompt_remember_hint(inputs)
	if (locale === "it") return it_langprompt_remember_hint(inputs)
	if (locale === "nl") return nl_langprompt_remember_hint(inputs)
	if (locale === "pl") return pl_langprompt_remember_hint(inputs)
	if (locale === "pt") return pt_langprompt_remember_hint(inputs)
	if (locale === "ru") return ru_langprompt_remember_hint(inputs)
	if (locale === "sv") return sv_langprompt_remember_hint(inputs)
	if (locale === "tr") return tr_langprompt_remember_hint(inputs)
	if (locale === "zh") return zh_langprompt_remember_hint(inputs)
	if (locale === "ja") return ja_langprompt_remember_hint(inputs)
	return en_langprompt_remember_hint(inputs)
});
