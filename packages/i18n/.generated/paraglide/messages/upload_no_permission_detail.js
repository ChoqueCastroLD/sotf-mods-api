/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_No_Permission_DetailInputs */

const en_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A moderator restricted uploads for now. Check your notifications for the details or contact the team.`)
};

const es_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un moderador ha restringido las subidas por ahora. Revisa tus notificaciones para ver los detalles o contacta con el equipo.`)
};

const de_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Moderator hat Uploads vorerst eingeschränkt. Details findest du in deinen Benachrichtigungen, oder kontaktiere das Team.`)
};

const fr_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un modérateur a restreint les envois pour le moment. Consultez vos notifications pour les détails ou contactez l’équipe.`)
};

const it_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un moderatore ha limitato i caricamenti per ora. Controlla le notifiche per i dettagli o contatta il team.`)
};

const nl_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een moderator heeft uploads voorlopig beperkt. Bekijk je meldingen voor details of neem contact op met het team.`)
};

const pl_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator tymczasowo ograniczył wysyłanie. Szczegóły znajdziesz w powiadomieniach albo skontaktuj się z zespołem.`)
};

const pt_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um moderador restringiu os envios por enquanto. Veja os detalhes nas notificações ou fale com a equipe.`)
};

const ru_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модератор временно ограничил загрузки. Подробности в уведомлениях, или напишите команде.`)
};

const sv_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En moderator har begränsat uppladdningar tills vidare. Se dina aviseringar för detaljer eller kontakta teamet.`)
};

const tr_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir moderatör yüklemeleri şimdilik kısıtladı. Ayrıntılar için bildirimlerine bak ya da ekiple iletişime geç.`)
};

const zh_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版主暂时限制了上传。详情请查看通知，或联系团队。`)
};

const ja_upload_no_permission_detail = /** @type {(inputs: Upload_No_Permission_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーターが一時的にアップロードを制限しています。詳しくは通知を確認するか、チームに連絡してください。`)
};

/**
* | output |
* | --- |
* | "A moderator restricted uploads for now. Check your notifications for the details or contact the team." |
*
* @param {Upload_No_Permission_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_no_permission_detail = /** @type {((inputs?: Upload_No_Permission_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_No_Permission_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_no_permission_detail(inputs)
	if (locale === "de") return de_upload_no_permission_detail(inputs)
	if (locale === "fr") return fr_upload_no_permission_detail(inputs)
	if (locale === "it") return it_upload_no_permission_detail(inputs)
	if (locale === "nl") return nl_upload_no_permission_detail(inputs)
	if (locale === "pl") return pl_upload_no_permission_detail(inputs)
	if (locale === "pt") return pt_upload_no_permission_detail(inputs)
	if (locale === "ru") return ru_upload_no_permission_detail(inputs)
	if (locale === "sv") return sv_upload_no_permission_detail(inputs)
	if (locale === "tr") return tr_upload_no_permission_detail(inputs)
	if (locale === "zh") return zh_upload_no_permission_detail(inputs)
	if (locale === "ja") return ja_upload_no_permission_detail(inputs)
	return en_upload_no_permission_detail(inputs)
});
