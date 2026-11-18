/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Dialog_TextInputs */

const en_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose what the key can do. You will see it only once.`)
};

const es_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige qué puede hacer la clave. Solo la verás una vez.`)
};

const de_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle, was der Schlüssel darf. Du siehst ihn nur einmal.`)
};

const fr_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez ce que la clé peut faire. Vous ne la verrez qu’une fois.`)
};

const it_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli cosa può fare la chiave. La vedrai una sola volta.`)
};

const nl_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies wat de sleutel mag doen. Je ziet hem maar één keer.`)
};

const pl_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz, co klucz może robić. Zobaczysz go tylko raz.`)
};

const pt_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha o que a chave pode fazer. Você só vai vê-la uma vez.`)
};

const ru_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите, что может делать ключ. Вы увидите его только один раз.`)
};

const sv_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj vad nyckeln får göra. Du ser den bara en gång.`)
};

const tr_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anahtarın neler yapabileceğini seç. Anahtarı yalnızca bir kez göreceksin.`)
};

const zh_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择密钥可以执行的操作。密钥只会显示一次。`)
};

const ja_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーにできることを選んでください。キーは一度しか表示されません。`)
};

/**
* | output |
* | --- |
* | "Choose what the key can do. You will see it only once." |
*
* @param {Tokens_Dialog_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_dialog_text = /** @type {((inputs?: Tokens_Dialog_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Dialog_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_dialog_text(inputs)
	if (locale === "de") return de_tokens_dialog_text(inputs)
	if (locale === "fr") return fr_tokens_dialog_text(inputs)
	if (locale === "it") return it_tokens_dialog_text(inputs)
	if (locale === "nl") return nl_tokens_dialog_text(inputs)
	if (locale === "pl") return pl_tokens_dialog_text(inputs)
	if (locale === "pt") return pt_tokens_dialog_text(inputs)
	if (locale === "ru") return ru_tokens_dialog_text(inputs)
	if (locale === "sv") return sv_tokens_dialog_text(inputs)
	if (locale === "tr") return tr_tokens_dialog_text(inputs)
	if (locale === "zh") return zh_tokens_dialog_text(inputs)
	if (locale === "ja") return ja_tokens_dialog_text(inputs)
	return en_tokens_dialog_text(inputs)
});
