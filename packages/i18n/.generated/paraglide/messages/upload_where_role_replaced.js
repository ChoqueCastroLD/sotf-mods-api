/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ role: NonNullable<unknown> }} Upload_Where_Role_ReplacedInputs */

const en_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Multiplayer answer changed to “${i?.role}” to match the platform.`)
};

const es_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La respuesta de multijugador cambió a «${i?.role}» para que coincida con la plataforma.`)
};

const de_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mehrspieler-Antwort auf „${i?.role}“ geändert, passend zur Plattform.`)
};

const fr_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La réponse multijoueur est passée à « ${i?.role} » pour correspondre à la plateforme.`)
};

const it_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La risposta multigiocatore è diventata «${i?.role}» per coincidere con la piattaforma.`)
};

const nl_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Het multiplayer-antwoord is gewijzigd naar “${i?.role}” zodat het bij het platform past.`)
};

const pl_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odpowiedź o trybie wieloosobowym zmieniono na „${i?.role}”, aby pasowała do platformy.`)
};

const pt_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A resposta de multijogador mudou para “${i?.role}” para combinar com a plataforma.`)
};

const ru_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ответ про мультиплеер изменён на «${i?.role}», чтобы он соответствовал платформе.`)
};

const sv_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flerspelarsvaret ändrades till ”${i?.role}” så att det passar plattformen.`)
};

const tr_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Çok oyunculu yanıtı, platforma uyması için “${i?.role}” olarak değiştirildi.`)
};

const zh_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`多人游戏的回答已改为“${i?.role}”，以匹配所选平台。`)
};

const ja_upload_where_role_replaced = /** @type {(inputs: Upload_Where_Role_ReplacedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`プラットフォームに合わせて、マルチプレイの回答を「${i?.role}」に変更しました。`)
};

/**
* | output |
* | --- |
* | "Multiplayer answer changed to “{role}” to match the platform." |
*
* @param {Upload_Where_Role_ReplacedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_where_role_replaced = /** @type {((inputs: Upload_Where_Role_ReplacedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Where_Role_ReplacedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_where_role_replaced(inputs)
	if (locale === "de") return de_upload_where_role_replaced(inputs)
	if (locale === "fr") return fr_upload_where_role_replaced(inputs)
	if (locale === "it") return it_upload_where_role_replaced(inputs)
	if (locale === "nl") return nl_upload_where_role_replaced(inputs)
	if (locale === "pl") return pl_upload_where_role_replaced(inputs)
	if (locale === "pt") return pt_upload_where_role_replaced(inputs)
	if (locale === "ru") return ru_upload_where_role_replaced(inputs)
	if (locale === "sv") return sv_upload_where_role_replaced(inputs)
	if (locale === "tr") return tr_upload_where_role_replaced(inputs)
	if (locale === "zh") return zh_upload_where_role_replaced(inputs)
	if (locale === "ja") return ja_upload_where_role_replaced(inputs)
	return en_upload_where_role_replaced(inputs)
});
