/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kit: NonNullable<unknown> }} Emails_Notify_Item_Kit_Updated_FollowedInputs */

const en_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The kit ${i?.kit} you follow was updated`)
};

const es_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El kit ${i?.kit} que sigues se actualizó`)
};

const de_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Das Kit ${i?.kit}, dem du folgst, wurde aktualisiert`)
};

const fr_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le kit ${i?.kit} que vous suivez a été mis à jour`)
};

const it_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il kit ${i?.kit} che segui è stato aggiornato`)
};

const nl_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De kit ${i?.kit} die je volgt is bijgewerkt`)
};

const pl_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zestaw ${i?.kit}, który obserwujesz, został zaktualizowany`)
};

const pt_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O kit ${i?.kit} que você segue foi atualizado`)
};

const ru_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Набор ${i?.kit}, на который вы подписаны, обновлён`)
};

const sv_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kitet ${i?.kit} som du följer har uppdaterats`)
};

const tr_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Takip ettiğin ${i?.kit} kiti güncellendi`)
};

const zh_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你关注的套件 ${i?.kit} 已更新`)
};

const ja_emails_notify_item_kit_updated_followed = /** @type {(inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`フォロー中のキット ${i?.kit} が更新されました`)
};

/**
* | output |
* | --- |
* | "The kit {kit} you follow was updated" |
*
* @param {Emails_Notify_Item_Kit_Updated_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_kit_updated_followed = /** @type {((inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Kit_Updated_FollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_kit_updated_followed(inputs)
	if (locale === "de") return de_emails_notify_item_kit_updated_followed(inputs)
	if (locale === "fr") return fr_emails_notify_item_kit_updated_followed(inputs)
	if (locale === "it") return it_emails_notify_item_kit_updated_followed(inputs)
	if (locale === "nl") return nl_emails_notify_item_kit_updated_followed(inputs)
	if (locale === "pl") return pl_emails_notify_item_kit_updated_followed(inputs)
	if (locale === "pt") return pt_emails_notify_item_kit_updated_followed(inputs)
	if (locale === "ru") return ru_emails_notify_item_kit_updated_followed(inputs)
	if (locale === "sv") return sv_emails_notify_item_kit_updated_followed(inputs)
	if (locale === "tr") return tr_emails_notify_item_kit_updated_followed(inputs)
	if (locale === "zh") return zh_emails_notify_item_kit_updated_followed(inputs)
	if (locale === "ja") return ja_emails_notify_item_kit_updated_followed(inputs)
	return en_emails_notify_item_kit_updated_followed(inputs)
});
