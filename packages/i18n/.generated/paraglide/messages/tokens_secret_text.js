/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Secret_TextInputs */

const en_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is the only time it is shown. Store it somewhere safe and never share it.`)
};

const es_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es la única vez que se muestra. Guárdalo en un lugar seguro y no lo compartas.`)
};

const de_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er wird nur dieses eine Mal angezeigt. Bewahre ihn sicher auf und teile ihn nie.`)
};

const fr_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il n’est affiché qu’une seule fois. Conservez-le en lieu sûr et ne le partagez jamais.`)
};

const it_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Viene mostrato solo questa volta. Conservalo in un luogo sicuro e non condividerlo mai.`)
};

const nl_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit is de enige keer dat hij wordt getoond. Bewaar hem veilig en deel hem nooit.`)
};

const pl_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyświetlany jest tylko ten jeden raz. Zapisz go w bezpiecznym miejscu i nigdy nie udostępniaj.`)
};

const pt_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ele é exibido apenas esta vez. Guarde-o em local seguro e nunca o compartilhe.`)
};

const ru_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Он показывается только один раз. Храните его в надёжном месте и никому не передавайте.`)
};

const sv_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den visas bara den här gången. Förvara den säkert och dela den aldrig.`)
};

const tr_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca bu kez gösterilir. Güvenli bir yerde sakla ve kimseyle paylaşma.`)
};

const zh_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`令牌仅显示这一次。请妥善保存，切勿分享给他人。`)
};

const ja_tokens_secret_text = /** @type {(inputs: Tokens_Secret_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示されるのはこの1回だけです。安全な場所に保管し、他人と共有しないでください。`)
};

/**
* | output |
* | --- |
* | "This is the only time it is shown. Store it somewhere safe and never share it." |
*
* @param {Tokens_Secret_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_secret_text = /** @type {((inputs?: Tokens_Secret_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Secret_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_secret_text(inputs)
	if (locale === "de") return de_tokens_secret_text(inputs)
	if (locale === "fr") return fr_tokens_secret_text(inputs)
	if (locale === "it") return it_tokens_secret_text(inputs)
	if (locale === "nl") return nl_tokens_secret_text(inputs)
	if (locale === "pl") return pl_tokens_secret_text(inputs)
	if (locale === "pt") return pt_tokens_secret_text(inputs)
	if (locale === "ru") return ru_tokens_secret_text(inputs)
	if (locale === "sv") return sv_tokens_secret_text(inputs)
	if (locale === "tr") return tr_tokens_secret_text(inputs)
	if (locale === "zh") return zh_tokens_secret_text(inputs)
	if (locale === "ja") return ja_tokens_secret_text(inputs)
	return en_tokens_secret_text(inputs)
});
