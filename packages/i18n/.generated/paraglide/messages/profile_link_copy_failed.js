/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Link_Copy_FailedInputs */

const en_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t copy the link. Copy it from the address bar.`)
};

const es_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo copiar el enlace. Cópialo desde la barra de direcciones.`)
};

const de_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Link konnte nicht kopiert werden. Kopiere ihn aus der Adressleiste.`)
};

const fr_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de copier le lien. Copiez-le depuis la barre d’adresse.`)
};

const it_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile copiare il link. Copialo dalla barra degli indirizzi.`)
};

const nl_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De link kon niet worden gekopieerd. Kopieer hem uit de adresbalk.`)
};

const pl_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się skopiować linku. Skopiuj go z paska adresu.`)
};

const pt_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível copiar o link. Copie-o da barra de endereços.`)
};

const ru_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось скопировать ссылку. Скопируйте её из адресной строки.`)
};

const sv_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länken kunde inte kopieras. Kopiera den från adressfältet.`)
};

const tr_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı kopyalanamadı. Adres çubuğundan kopyalayın.`)
};

const zh_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法复制链接，请从地址栏复制。`)
};

const ja_profile_link_copy_failed = /** @type {(inputs: Profile_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクをコピーできませんでした。アドレスバーからコピーしてください。`)
};

/**
* | output |
* | --- |
* | "Couldn’t copy the link. Copy it from the address bar." |
*
* @param {Profile_Link_Copy_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_link_copy_failed = /** @type {((inputs?: Profile_Link_Copy_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Link_Copy_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_link_copy_failed(inputs)
	if (locale === "de") return de_profile_link_copy_failed(inputs)
	if (locale === "fr") return fr_profile_link_copy_failed(inputs)
	if (locale === "it") return it_profile_link_copy_failed(inputs)
	if (locale === "nl") return nl_profile_link_copy_failed(inputs)
	if (locale === "pl") return pl_profile_link_copy_failed(inputs)
	if (locale === "pt") return pt_profile_link_copy_failed(inputs)
	if (locale === "ru") return ru_profile_link_copy_failed(inputs)
	if (locale === "sv") return sv_profile_link_copy_failed(inputs)
	if (locale === "tr") return tr_profile_link_copy_failed(inputs)
	if (locale === "zh") return zh_profile_link_copy_failed(inputs)
	if (locale === "ja") return ja_profile_link_copy_failed(inputs)
	return en_profile_link_copy_failed(inputs)
});
