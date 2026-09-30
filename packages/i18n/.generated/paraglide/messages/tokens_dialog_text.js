/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Dialog_TextInputs */

const en_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose what the token can do. You will see the secret only once.`)
};

const es_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige qué puede hacer el token. Verás el secreto una sola vez.`)
};

const de_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lege fest, was der Token darf. Das Geheimnis siehst du nur einmal.`)
};

const fr_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez ce que le jeton peut faire. Vous ne verrez le secret qu’une seule fois.`)
};

const it_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli cosa può fare il token. Vedrai il segreto una sola volta.`)
};

const nl_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies wat het token mag doen. Je ziet het geheim maar één keer.`)
};

const pl_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz, co może robić token. Sekret zobaczysz tylko raz.`)
};

const pt_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha o que o token pode fazer. Você verá o segredo apenas uma vez.`)
};

const ru_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите, что может делать токен. Секрет будет показан только один раз.`)
};

const sv_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj vad token får göra. Du ser hemligheten bara en gång.`)
};

const tr_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belirtecin neler yapabileceğini seç. Gizli değeri yalnızca bir kez göreceksin.`)
};

const zh_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择令牌可执行的操作。密钥只会显示一次。`)
};

const ja_tokens_dialog_text = /** @type {(inputs: Tokens_Dialog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トークンに許可する操作を選択してください。シークレットは一度しか表示されません。`)
};

/**
* | output |
* | --- |
* | "Choose what the token can do. You will see the secret only once." |
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
