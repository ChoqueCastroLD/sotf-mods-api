/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Comment_PendingInputs */

const en_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for a moderator to check it.`)
};

const es_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esperando a que lo revise un moderador.`)
};

const de_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wartet darauf, dass ein Moderator es prüft.`)
};

const fr_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente de la vérification d’un modérateur.`)
};

const it_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In attesa che un moderatore lo controlli.`)
};

const nl_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wacht tot een moderator het controleert.`)
};

const pl_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czeka na sprawdzenie przez moderatora.`)
};

const pt_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguardando a checagem de um moderador.`)
};

const ru_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ждёт проверки модератором.`)
};

const sv_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntar på att en moderator ska kolla det.`)
};

const tr_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir moderatörün kontrol etmesi bekleniyor.`)
};

const zh_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待审核员审核。`)
};

const ja_ui_domain_comment_pending = /** @type {(inputs: Ui_Domain_Comment_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーターの確認待ちです。`)
};

/**
* | output |
* | --- |
* | "Waiting for a moderator to check it." |
*
* @param {Ui_Domain_Comment_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_comment_pending = /** @type {((inputs?: Ui_Domain_Comment_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_comment_pending(inputs)
	if (locale === "de") return de_ui_domain_comment_pending(inputs)
	if (locale === "fr") return fr_ui_domain_comment_pending(inputs)
	if (locale === "it") return it_ui_domain_comment_pending(inputs)
	if (locale === "nl") return nl_ui_domain_comment_pending(inputs)
	if (locale === "pl") return pl_ui_domain_comment_pending(inputs)
	if (locale === "pt") return pt_ui_domain_comment_pending(inputs)
	if (locale === "ru") return ru_ui_domain_comment_pending(inputs)
	if (locale === "sv") return sv_ui_domain_comment_pending(inputs)
	if (locale === "tr") return tr_ui_domain_comment_pending(inputs)
	if (locale === "zh") return zh_ui_domain_comment_pending(inputs)
	if (locale === "ja") return ja_ui_domain_comment_pending(inputs)
	return en_ui_domain_comment_pending(inputs)
});
